// Fixed "Site feito pela octomaker" pill shared by the demo sites. Links to OctoMaker's WhatsApp.
(function () {
  const WHATSAPP = '5535984220874';
  const site = document.currentScript.dataset.site || 'um site';
  const msg = `Olá! Vi ${site} feito pela OctoMaker e quero um orçamento para o meu site.`;
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  const logo = document.currentScript.src.replace(/octomaker-badge\.js.*$/, 'octomaker-mini.svg');

  const css = `
    .om-bar { position: fixed; left: 50%; bottom: 14px; z-index: 9999; transform: translate(-50%, 120px);
      display: flex; align-items: center; gap: 10px; padding: 6px 16px 6px 6px; border-radius: 999px;
      background: rgba(5,8,22,.8); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(126,160,255,.28); color: #C6D0E6; text-decoration: none;
      font: 500 13px/1 "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; white-space: nowrap;
      box-shadow: 0 10px 30px rgba(0,0,0,.3); transition: transform .8s cubic-bezier(.2,.9,.2,1), border-color .3s; cursor: pointer; }
    .om-bar.show { transform: translate(-50%, 0); }
    .om-bar:hover { border-color: #7EA0FF; }
    .om-bar img { width: 26px; height: 26px; display: block; }
    .om-bar b { color: #fff; font-weight: 800; letter-spacing: -.03em; }
    .om-bar .om-cta { max-width: 0; overflow: hidden; opacity: 0; color: #3DDC97; font-weight: 700; transition: max-width .5s, opacity .4s; }
    .om-bar:hover .om-cta { max-width: 160px; opacity: 1; }
    @media (max-width: 520px) {
      .om-bar { left: 12px; bottom: 12px; font-size: 12px; transform: translate(0, 120px); }
      .om-bar.show { transform: translate(0, 0); }
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const a = document.createElement('a');
  a.className = 'om-bar';
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  a.innerHTML = `<img src="${logo}" alt=""><span>Site feito pela <b>octomaker</b></span><span class="om-cta">· quero um site →</span>`;
  document.body.appendChild(a);
  setTimeout(() => a.classList.add('show'), 1200);
})();
