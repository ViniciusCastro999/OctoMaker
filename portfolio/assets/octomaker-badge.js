// Fixed "desenvolvido por octomaker_" footer bar shared by the demo sites. Links to OctoMaker's WhatsApp.
(function () {
  const WHATSAPP = '5535984220874';
  const site = document.currentScript.dataset.site || 'um site';
  const msg = `Olá! Vi ${site} feito pela OctoMaker e quero um orçamento para o meu site.`;
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  const logo = document.currentScript.src.replace(/octomaker-badge\.js.*$/, 'octomaker-mini.svg');

  const css = `
    .om-bar { position: fixed; left: 50%; bottom: 14px; z-index: 9999; transform: translate(-50%, 120px);
      display: flex; align-items: center; gap: 10px; padding: 7px 14px 7px 7px; border-radius: 999px;
      background: rgba(14,16,21,.72); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(61,123,255,.35); color: #c9d2e3; text-decoration: none;
      font: 500 12px/1 "JetBrains Mono", Menlo, monospace; letter-spacing: .02em; white-space: nowrap;
      box-shadow: 0 8px 30px rgba(0,0,0,.25); transition: transform .8s cubic-bezier(.2,.9,.2,1), border-color .3s, box-shadow .3s; cursor: pointer; }
    .om-bar.show { transform: translate(-50%, 0); }
    .om-bar:hover { border-color: #3d7bff; box-shadow: 0 0 0 4px rgba(61,123,255,.15), 0 10px 34px rgba(61,123,255,.35); }
    .om-bar img { width: 24px; height: 24px; display: block; transition: transform .5s cubic-bezier(.3,1.6,.5,1); }
    .om-bar:hover img { transform: rotate(-10deg) scale(1.12); }
    .om-bar b { color: #fff; font-weight: 700; } .om-bar b span { color: #ffd000; }
    .om-bar .om-cta { max-width: 0; overflow: hidden; opacity: 0; color: #ffd000; transition: max-width .5s, opacity .4s, margin .5s; }
    .om-bar:hover .om-cta { max-width: 160px; opacity: 1; margin-left: 2px; }
    @media (max-width: 520px) { .om-bar { bottom: 10px; font-size: 11px; } }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const a = document.createElement('a');
  a.className = 'om-bar';
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  a.innerHTML = `<img src="${logo}" alt=""><span>desenvolvido por <b>octo<span>maker</span>_</b></span><span class="om-cta">· quero um site →</span>`;
  document.body.appendChild(a);
  setTimeout(() => a.classList.add('show'), 1200);
})();
