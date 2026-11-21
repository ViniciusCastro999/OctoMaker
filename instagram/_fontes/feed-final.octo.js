const NS = 'http://www.w3.org/2000/svg';
function octopus(svg, C) {
  const el = (n, a = {}, p = svg) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); p.appendChild(e); return e; };
  svg.setAttribute('viewBox', '0 0 1080 1350');
  const N = 30, SUCK = [5, 10, 15, 20, 24], t = C.t ?? 1.1, n = C.ang.length;
  const gArms = el('g'), gPills = el('g');
  C.ang.forEach((deg, i) => {
    const a0 = deg * Math.PI / 180, L = C.len[i], seg = L / N, side = i < n / 2 ? 1 : -1, ph = i * 1.37;
    const bx = C.cx + (i - (n - 1) / 2) * C.r * .2, by = C.cy + C.r * .42;
    const pts = [[bx, by]]; let x = bx, y = by;
    const curl = C.curls ? C.curls[i] : C.curl;
    for (let k = 1; k <= N; k++) {
      const s = k / N, ang = a0 + Math.sin(t * 1.7 + ph - s * 4.5) * C.wave * s + side * curl * s * s * s;
      x += Math.cos(ang) * seg; y += Math.sin(ang) * seg; pts.push([x, y]);
    }
    const left = [], right = [], width = s => C.thick * Math.pow(1 - s, .85) + 4;
    const body = el('path', { fill: '#64DBE8' }, gArms);
    pts.forEach((p, k) => {
      const q = pts[Math.min(k + 1, N)], o = pts[Math.max(k - 1, 0)];
      let tx = q[0] - o[0], ty = q[1] - o[1]; const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
      const w = width(k / N) / 2;
      left.push([p[0] - ty * w, p[1] + tx * w]); right.push([p[0] + ty * w, p[1] - tx * w]);
      if (SUCK.includes(k)) { const off = w * .45 * side; el('circle', { cx: p[0] - ty * off, cy: p[1] + tx * off, r: w * .34, fill: '#B8F1F7' }, gArms); }
    });
    let d = `M${left[0]}`; for (let k = 1; k <= N; k++) d += `L${left[k]}`;
    d += `A2,2 0 0 1 ${right[N]}`; for (let k = N - 1; k >= 0; k--) d += `L${right[k]}`;
    body.setAttribute('d', d + 'Z');
    const label = C.labels && C.labels[i];
    if (label) {
      const hot = label.startsWith('!'), off = label.startsWith('~'), txt0 = label.replace(/^[!~]/, '');
      const pill = el('g', { class: 'pill' + (hot ? ' hot' : '') + (off ? ' off' : ''), transform: `translate(${pts[N]}) rotate(${(Math.sin(t * 1.3 + ph) * 6).toFixed(1)})` }, gPills);
      const rect = el('rect', { rx: C.font * 1.05 }, pill);
      const tx = el('text', { 'font-size': C.font, 'text-anchor': 'middle', 'dominant-baseline': 'central' }, pill);
      tx.textContent = txt0;
      const w = tx.getBBox().width + C.font * 1.6;
      Object.entries({ width: w, height: C.font * 2.1, x: -w / 2, y: -C.font * 1.05 }).forEach(([k, v]) => rect.setAttribute(k, v));
    }
  });
  const head = el('g', { transform: `translate(${C.cx},${C.cy}) rotate(${C.tilt || 0})` });
  el('path', { d: `M${-C.r},${C.r * .42} C${-C.r},${-C.r * 1.2} ${C.r},${-C.r * 1.2} ${C.r},${C.r * .42} C${C.r},${C.r * .62} ${-C.r},${C.r * .62} ${-C.r},${C.r * .42}Z`, fill: '#64DBE8' }, head);
  [-1, 1].forEach(s => {
    el('ellipse', { cx: s * C.r * .55, cy: C.r * .18, rx: C.r * .14, ry: C.r * .08, fill: '#FF9A55' }, head);
    el('ellipse', { cx: s * C.r * .36, cy: -C.r * .12, rx: C.r * .2, ry: C.r * .2, fill: '#F5FAFB' }, head);
    el('circle', { cx: s * C.r * .36 + (C.lx || 0) * C.r * .09, cy: -C.r * .12 + (C.ly || 0) * C.r * .09, r: C.r * .1, fill: '#04141E' }, head);
  });
}
