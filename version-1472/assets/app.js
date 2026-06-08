(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function initMenu() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav) {
      return;
    }
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function initHero() {
    var hero = document.querySelector('[data-hero]');
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
    if (slides.length < 2) {
      return;
    }
    var active = 0;
    var timer = null;
    function show(index) {
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === active);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === active);
      });
    }
    function start() {
      stop();
      timer = window.setInterval(function () {
        show(active + 1);
      }, 5600);
    }
    function stop() {
      if (timer) {
        window.clearInterval(timer);
      }
    }
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        show(index);
        start();
      });
    });
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    show(0);
    start();
  }

  function initFilters() {
    var panels = Array.prototype.slice.call(document.querySelectorAll('[data-filter-panel]'));
    panels.forEach(function (panel) {
      var scope = panel.parentElement || document;
      var keyword = panel.querySelector('[data-filter-keyword]');
      var category = panel.querySelector('[data-filter-category]');
      var year = panel.querySelector('[data-filter-year]');
      var empty = panel.querySelector('[data-empty-state]');
      var cards = Array.prototype.slice.call(scope.querySelectorAll('.filter-card'));
      function apply() {
        var key = keyword ? keyword.value.trim().toLowerCase() : '';
        var cat = category ? category.value : '';
        var selectedYear = year ? year.value : '';
        var visible = 0;
        cards.forEach(function (card) {
          var text = [card.dataset.title, card.dataset.category, card.dataset.year, card.dataset.tags, card.dataset.region].join(' ').toLowerCase();
          var matched = true;
          if (key && text.indexOf(key) === -1) {
            matched = false;
          }
          if (cat && card.dataset.category !== cat) {
            matched = false;
          }
          if (selectedYear && card.dataset.year !== selectedYear) {
            matched = false;
          }
          card.hidden = !matched;
          if (matched) {
            visible += 1;
          }
        });
        if (empty) {
          empty.hidden = visible !== 0;
        }
      }
      [keyword, category, year].forEach(function (control) {
        if (control) {
          control.addEventListener('input', apply);
          control.addEventListener('change', apply);
        }
      });
      apply();
    });
  }

  function initPlayer() {
    var stage = document.querySelector('.video-stage');
    var video = document.querySelector('.site-player');
    var button = document.querySelector('.player-start');
    if (!stage || !video) {
      return;
    }
    var src = video.getAttribute('data-video');
    var attached = false;
    var hlsInstance = null;
    var pendingPlay = false;

    function attach() {
      if (attached || !src) {
        return;
      }
      attached = true;
      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
          if (pendingPlay) {
            video.play().catch(function () {});
          }
        });
        hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
          if (data && data.fatal && hlsInstance) {
            if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
              hlsInstance.startLoad();
            } else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
              hlsInstance.recoverMediaError();
            }
          }
        });
      } else {
        video.src = src;
      }
    }

    function play() {
      pendingPlay = true;
      attach();
      video.play().catch(function () {});
    }

    function toggle() {
      if (video.paused) {
        play();
      } else {
        video.pause();
      }
    }

    if (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        play();
      });
    }

    video.addEventListener('click', toggle);
    video.addEventListener('play', function () {
      stage.classList.add('is-playing');
    });
    video.addEventListener('pause', function () {
      stage.classList.remove('is-playing');
    });
    window.addEventListener('beforeunload', function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  }

  ready(function () {
    initMenu();
    initHero();
    initFilters();
    initPlayer();
  });
})();
