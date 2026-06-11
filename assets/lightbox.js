(function () {
  var box = null;

  function close() {
    if (!box) return;
    box.remove();
    box = null;
    document.body.classList.remove('lightbox-open');
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e) { if (e.key === 'Escape') close(); }

  function openImage(src, alt) {
    close();
    box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button>';
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    box.appendChild(img);
    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('lightbox-close') || e.target === img) close();
    });
    document.body.appendChild(box);
    document.body.classList.add('lightbox-open');
    document.addEventListener('keydown', onKey);
  }

  function openVideo(src, title) {
    close();
    box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button>';
    var vid = document.createElement('video');
    vid.src = src;
    vid.controls = true;
    vid.autoplay = true;
    vid.setAttribute('playsinline', '');
    vid.title = title || '';
    box.appendChild(vid);
    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('lightbox-close')) close();
    });
    document.body.appendChild(box);
    document.body.classList.add('lightbox-open');
    document.addEventListener('keydown', onKey);
  }

  document.querySelectorAll('.shot a, .shot-thumb').forEach(function (a) {
    var img = a.querySelector('img');
    if (!img) return;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      openImage(a.getAttribute('href') || img.src, img.alt);
    });
  });

  document.querySelectorAll('.video-play').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openVideo(btn.getAttribute('data-src'), btn.getAttribute('data-title'));
    });
  });

  document.querySelectorAll('.nav-drop-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = btn.parentElement.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-drop.open').forEach(function (d) {
      d.classList.remove('open');
      var b = d.querySelector('.nav-drop-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });
})();
