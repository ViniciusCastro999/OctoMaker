// Renders an animated page (exposing window.render(t) and window.DUR) frame by frame and encodes an MP4.
// usage: node render-reels.mjs <page file> <output.mp4> [fps]
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [page, out, fpsArg] = process.argv.slice(2);
const FPS = Number(fpsArg || 30);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9400 + Math.floor(Math.random() * 400);
const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'om-reels-'));
const frames = fs.mkdtempSync(path.join(os.tmpdir(), 'om-frames-'));
const chrome = spawn(CHROME, ['--headless=new', '--hide-scrollbars', '--allow-file-access-from-files', `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, '--window-size=1080,1920', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let targets;
for (let i = 0; i < 40 && !targets; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(250); } }
const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise(r => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async expr => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;

await send('Emulation.setDeviceMetricsOverride', { width: 1080, height: 1920, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: pathToFileURL(path.resolve(page)).href });
await sleep(1500);
await ev(`(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }))); await new Promise(r => setTimeout(r, 500)); })()`);

const dur = await ev('window.DUR');
const n = Math.round(dur * FPS);
for (let f = 0; f < n; f++) {
  await ev(`render(${f / FPS})`);
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 95, clip: { x: 0, y: 0, width: 1080, height: 1920, scale: 1 } });
  fs.writeFileSync(path.join(frames, `f${String(f).padStart(4, '0')}.jpg`), Buffer.from(shot.result.data, 'base64'));
}
ws.close(); chrome.kill();
fs.mkdirSync(path.dirname(out), { recursive: true });
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(frames, 'f%04d.jpg'),
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-movflags', '+faststart', out]);
console.log('ok', out, n, 'frames');
await sleep(300);
for (const d of [prof, frames]) { try { fs.rmSync(d, { recursive: true, force: true }); } catch {} }
process.exit(0);
