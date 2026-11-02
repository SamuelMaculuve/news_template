/* Partilhado por todas as páginas: fotos de Moçambique (Wikimedia Commons), avatares e aviso "Brevemente". */
(function () {
  var IMG = {
    maputo: 'Maputo seen from southeast - October 2006.jpg',
    ponte: 'Maputo–Katembe bridge from the norther shore; July 2018.jpg',
    ponte2: 'Maputo–Katembe bridge from the norther shore; July 2018 (2).jpg',
    av24: 'Avenida 24 de Julho Maputo (391897906).jpg',
    amanhecer: 'Amanhecer em Maputo (497053587).jpg',
    porsol: 'Pôr do sol em Maputo (497053533).jpg',
    praca: 'The Independence Square (7667683818).jpg',
    marginal: 'Maputo Waterfront beach, Mozambique.jpg',
    seaside: 'Maputo Seaside View.jpg',
    catembe: 'Maputo from Catembe (9434966515).jpg',
    vista: 'View of Maputo (8755419284).jpg',
    aerea: 'Maputo-aerial.jpg',
    cidade: 'Maputo (4402526767).jpg',
    skyline: '60 Skyline (36931644911).jpg',
    estacao: 'Maputo Train Station.jpg',
    cfm: 'Caminhos de Ferro de Mocambique, Railway Station in Maputo, Mozambique.jpg',
    vila: 'Vila Algarve, Maputo, 2013 (11303276763).jpg',
    baixa: 'Baixa - do hotel Cardoso.jpg',
    iss: 'Maputo from ISS.jpg',
    katembe: 'View of Katembe.jpg',
    museu: 'Museu de História Natural.jpg',
    bairro: '2010-10-18 10-54-37 Mozambique Maputo Mapoissane.jpg',
    ilha: 'Ilha de Moçambique.jpg',
    ilhamuseu: 'Museu Da Ilha De Mocambique (33387901932).jpg',
    dhow: 'Mozambique - traditional sailboat.jpg',
    ilha2: 'Mozambique n2.jpg',
    beira: 'Beira center 2000.jpg',
    mandioca: 'Cassava field in Mozambique.jpg',
    agricultores: "Farmers' Group (5686553255).jpg",
    tomate: 'Women picking tomatoes in the fields.jpg',
    tomate2: 'Women discussing labour on a tomato farm.jpg',
    gergelim: 'Sesame Seed Harvesting.JPG',
    cabras: 'Women lead goats to market.jpg',
    caju: 'Distilling caju apple liquor in Mogovolas-Nampula Province.jpg',
    caju2: 'Shrivelled and fermented cashew apples ready for distillation.jpg',
    camponesas: 'Helvetas Bäuerinnen Mosambik.jpg',
    conversa: 'Discussing farming matters.jpg',
    campo: 'Farmer with child in field.jpg',
    galinhas: 'Low-budget chicken coop (4722958959).jpg',
    praiafut: 'Beach soccer boys.jpg',
    praiafut2: 'Fußball am Strand (24124157052).jpg',
    hoquei: 'Mozambique au mondial A rink hockey 2007.jpg'
  };
  var COLORS = ['#007A5E', '#D21034', '#FCE100', '#1F2937', '#0E7490', '#B45309'];

  function src(key, w) {
    var f = IMG[key] || IMG.maputo;
    return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(f) + '?width=' + (w || 800);
  }
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
  function av(name) {
    var ini = name.split(' ').map(function (p) { return p[0]; }).slice(0, 2).join('').toUpperCase();
    var c = COLORS[hash(name) % COLORS.length], fg = c === '#FCE100' ? '#111' : '#fff';
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="' + c + '"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-size="26" font-weight="700" fill="' + fg + '">' + ini + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  var FALLBACK = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#007A5E"/><stop offset="1" stop-color="#0b3b33"/></linearGradient></defs><rect width="400" height="260" fill="url(#g)"/><rect y="236" width="400" height="8" fill="#FCE100"/><rect y="244" width="400" height="16" fill="#D21034"/><text x="200" y="130" text-anchor="middle" font-family="Arial" font-size="22" fill="#fff" opacity=".85">Moçambique</text></svg>');

  window.MZ = { src: src, av: av };

  function hydrate(root) {
    (root || document).querySelectorAll('img[data-mz]').forEach(function (im) {
      im.src = src(im.dataset.mz, +im.dataset.w || 800); im.removeAttribute('data-mz');
      if (!im.alt) im.alt = '';
      im.loading = 'lazy';
    });
    (root || document).querySelectorAll('img[data-av]').forEach(function (im) {
      im.src = av(im.dataset.av); im.alt = im.dataset.av; im.removeAttribute('data-av');
    });
  }
  // Se alguma foto falhar, mostra um cartão neutro nas cores da bandeira
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && !t.dataset.fb) { t.dataset.fb = 1; t.src = FALLBACK; }
  }, true);

  // Aviso "Brevemente"
  var toast;
  function soon() {
    if (!toast) {
      toast = document.createElement('div');
      toast.setAttribute('role', 'status');
      toast.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translate(-50%,20px);opacity:0;z-index:9999;max-width:calc(100% - 32px);background:#111;color:#fff;padding:14px 20px;border-radius:12px;font:500 14px/1.4 system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.25);display:flex;gap:10px;align-items:center;transition:all .25s ease';
      toast.innerHTML = '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#FCE100;flex:none"></span><span><b>Brevemente</b> — este artigo estará disponível em breve.</span>';
      document.body.appendChild(toast);
    }
    toast.style.opacity = '1'; toast.style.transform = 'translate(-50%,0)';
    clearTimeout(soon.t);
    soon.t = setTimeout(function () { toast.style.opacity = '0'; toast.style.transform = 'translate(-50%,20px)'; }, 2600);
  }
  window.MZ.soon = soon;
  var RX = /ler mais|continuar a ler|saber mais|ler artigo/i;
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a,button,article,[data-soon]');
    if (!el) return;
    var isLink = (el.tagName === 'A' || el.tagName === 'BUTTON') && RX.test(el.textContent);
    if (isLink || el.tagName === 'ARTICLE' || el.hasAttribute('data-soon')) {
      if ((el.tagName === 'A' || el.tagName === 'BUTTON') && !isLink && !el.hasAttribute('data-soon')) return;
      e.preventDefault(); soon();
    }
  });

  // Menu de telemóvel: um botão [data-menu-btn] abre um painel com os links de nav[data-nav]
  function setupMenu() {
    var btn = document.querySelector('[data-menu-btn]'), nav = document.querySelector('nav[data-nav]');
    if (!btn || !nav) return;
    var panel = document.createElement('div');
    panel.setAttribute('aria-hidden', 'true');
    panel.style.cssText = 'position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.45);opacity:0;pointer-events:none;transition:opacity .2s';
    var links = [].slice.call(nav.querySelectorAll('a')).map(function (a) {
      return '<a href="' + (a.getAttribute('href') || '#') + '" style="display:block;padding:14px 4px;border-bottom:1px solid #eee;color:#111;text-decoration:none;font:500 17px/1.3 system-ui,sans-serif">' + a.textContent.replace(/[▾▼]/g, '').trim() + '</a>';
    }).join('');
    panel.innerHTML = '<div style="position:absolute;top:0;right:0;height:100%;width:min(320px,85%);background:#fff;padding:20px 20px 40px;overflow:auto;transform:translateX(100%);transition:transform .25s ease"><button data-close aria-label="Fechar menu" style="float:right;font-size:26px;line-height:1;background:none;border:0;cursor:pointer;color:#111">×</button><p style="font:700 13px system-ui;color:#666;margin:6px 0 12px">Menu</p>' + links + '</div>';
    document.body.appendChild(panel);
    var sheet = panel.firstChild;
    function set(open) {
      panel.style.opacity = open ? '1' : '0'; panel.style.pointerEvents = open ? 'auto' : 'none';
      sheet.style.transform = open ? 'none' : 'translateX(100%)'; panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      btn.setAttribute('aria-expanded', open);
    }
    btn.setAttribute('aria-label', 'Abrir menu'); btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () { set(true); });
    panel.addEventListener('click', function (e) { if (e.target === panel || e.target.closest('[data-close]') || e.target.tagName === 'A') set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    hydrate();
    setupMenu();
    new MutationObserver(function () { hydrate(); }).observe(document.body, { childList: true, subtree: true });
    var st = document.createElement('style');
    st.textContent = 'article{cursor:pointer}';
    document.head.appendChild(st);
  });
})();
