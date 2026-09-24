// OctoMaker 3D coin: <div class="om-coin" data-size="360" data-mode="drag|spin"></div>
// drag: hold and spin horizontally with inertia, then it settles on a face. spin: turns slowly by itself.
(function () {
  const base = document.currentScript.src.replace(/octomaker-coin\.js.*$/, '');
  const INSET = 6.41, RADIUS = 3.94, LAYERS = 16;

  const css = `
    .om-coin { position: relative; perspective: 1400px; touch-action: pan-y; user-select: none; -webkit-user-select: none; }
    .om-coin[data-mode=drag] { cursor: grab; } .om-coin.grabbing { cursor: grabbing; }
    .om-coin .om-glow { position: absolute; inset: 14%; border-radius: 22%; background: radial-gradient(circle, rgba(61,123,255,.55), transparent 70%); filter: blur(28px); animation: omPulse 2.8s ease-in-out infinite; }
    @keyframes omPulse { 0%,100% { opacity: .9; transform: scale(1); } 50% { opacity: .45; transform: scale(.92); } }
    .om-coin .om-c { position: absolute; inset: 0; transform-style: preserve-3d; will-change: transform; }
    .om-coin .om-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
    .om-coin .om-face img { width: 100%; height: 100%; display: block; pointer-events: none; -webkit-user-drag: none; }
    .om-coin .om-shine { position: absolute; inset: ${INSET}%; border-radius: ${RADIUS * .85}%; pointer-events: none; mix-blend-mode: screen;
      background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,.22) 48%, transparent 62%); background-size: 250% 100%; }
    .om-coin .om-layer { position: absolute; inset: ${INSET}%; background: #0f1830; box-shadow: inset 0 0 0 2px #3d7bff, 0 0 6px rgba(61,123,255,.5); }
    .om-coin .om-hint { position: absolute; left: 50%; bottom: -34px; transform: translateX(-50%); font: 500 12px "JetBrains Mono", Menlo, monospace; color: #8d97ab; white-space: nowrap; display: flex; gap: 8px; align-items: center; transition: opacity .6s; }
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  document.querySelectorAll('.om-coin').forEach(el => {
    const S = +el.dataset.size || 320, mode = el.dataset.mode || 'drag', T = Math.max(6, S * .07);
    el.style.width = el.style.height = S + 'px';
    const r = S * (1 - INSET / 50) * RADIUS / 100;
    let layers = '';
    for (let i = 0; i < LAYERS; i++) layers += `<i class="om-layer" style="border-radius:${r}px;transform:translateZ(${(-T / 2 + T * i / (LAYERS - 1)).toFixed(2)}px)"></i>`;
    el.innerHTML = `<div class="om-glow"></div><div class="om-c">${layers}
      <div class="om-face" style="transform:translateZ(${T / 2 + .5}px)"><img src="${base}octomaker-moeda-frente.png" alt="OctoMaker"><i class="om-shine" style="border-radius:${r}px"></i></div>
      <div class="om-face" style="transform:rotateY(180deg) translateZ(${T / 2 + .5}px)"><img src="${base}octomaker-moeda-verso.png" alt=""><i class="om-shine" style="border-radius:${r}px"></i></div>
    </div>${mode === 'drag' ? '<span class="om-hint">⟷ arraste para girar</span>' : ''}`;
    const coin = el.querySelector('.om-c'), shines = el.querySelectorAll('.om-shine'), hint = el.querySelector('.om-hint');

    let angle = 0, vel = 0, dragging = false, lastX = 0, lastT = 0, touched = false, visible = false, running = false, t0 = performance.now();
    const paint = a => {
      coin.style.transform = `rotateX(-6deg) rotateY(${a}deg)`;
      const k = ((a % 360) + 360) % 360;
      shines.forEach(s => { s.style.backgroundPosition = `${(k / 360) * 250}% 0`; s.style.opacity = .4 + Math.abs(Math.sin(a * Math.PI / 180)) * .6; });
    };

    if (mode === 'drag') {
      el.addEventListener('pointerdown', e => { dragging = true; touched = true; lastX = e.clientX; lastT = e.timeStamp; vel = 0; el.setPointerCapture(e.pointerId); el.classList.add('grabbing'); if (hint) hint.style.opacity = 0; });
      el.addEventListener('pointermove', e => {
        if (!dragging) return;
        const dx = e.clientX - lastX, dt = Math.max(e.timeStamp - lastT, 1);
        angle += dx * .55; vel = dx * .55 * (16 / dt); lastX = e.clientX; lastT = e.timeStamp;
      });
      const up = () => { dragging = false; el.classList.remove('grabbing'); };
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    }

    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !running) { running = true; requestAnimationFrame(loop); } }).observe(el);
    function loop(now) {
      if (!visible) { running = false; return; }
      if (mode === 'spin') angle += .45;
      else if (!dragging) {
        if (Math.abs(vel) > .15) { angle += vel; vel *= .955; }
        else { vel = 0; const target = Math.round(angle / 180) * 180; angle += (target - angle) * .07; }
      }
      const sway = mode === 'drag' && !touched ? Math.sin((now - t0) / 900) * 22 : 0;
      paint(angle + sway);
      requestAnimationFrame(loop);
    }
    paint(0);
  });
})();
