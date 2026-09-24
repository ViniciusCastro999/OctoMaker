// GoatCounter (octomaker.goatcounter.com): page views + clicks on WhatsApp, Instagram and the octomaker_ badge.
(function () {
  var s = document.createElement('script');
  s.async = true; s.src = '//gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://octomaker.goatcounter.com/count');
  document.head.appendChild(s);

  var page = location.pathname.replace(/index\.html$/, '').split('/').filter(Boolean).pop() || 'inicio';
  if (page === 'portfolio') page = 'inicio';

  window.omTrack = function (name) {
    if (window.goatcounter && window.goatcounter.count)
      window.goatcounter.count({ path: name + '/' + page, title: name + ' (' + page + ')', event: true });
  };

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var name = a.classList.contains('om-bar') ? 'clique-octomaker'
      : /wa\.me/.test(a.href) ? 'clique-whatsapp'
      : /instagram\.com/.test(a.href) ? 'clique-instagram' : null;
    if (name) window.omTrack(name);
  }, true);
})();
