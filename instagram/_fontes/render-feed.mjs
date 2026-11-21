// Renders every <section data-out="..."> of a feed HTML page to a PNG of the section's own size.
// usage: node render-feed.mjs <page url> <output folder>
// example (with the site served on port 8765):
//   node render-feed.mjs http://localhost:8765/instagram/_fontes/feed-final.html ../Posts
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const [url, outDir] = process.argv.slice(2);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9400 + Math.floor(Math.random() * 400);
const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'om-render-'));
const chrome = spawn(CHROME, ['--headless=new', '--hide-scrollbars', `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, '--window-size=1200,2000', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let targets;
for (let i = 0; i < 40 && !targets; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(250); } }
const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise(r => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async expr => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;

await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 2000, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url });
await sleep(1500);
await ev(`(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }))); await new Promise(r => setTimeout(r, 800)); })()`);

const posts = await ev(`[...document.querySelectorAll('section[data-out]')].map(s => { const r = s.getBoundingClientRect(); return { out: s.dataset.out, x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height }; })`);
for (const p of posts) {
  const file = path.join(outDir, p.out);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: p.x, y: p.y, width: p.w, height: p.h, scale: 1 } });
  fs.writeFileSync(file, Buffer.from(shot.result.data, 'base64'));
  console.log('ok', p.out);
}
ws.close(); chrome.kill(); await sleep(500);
try { fs.rmSync(prof, { recursive: true, force: true }); } catch {}
process.exit(0);
