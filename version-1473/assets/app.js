(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-mobile-nav]');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  document.querySelectorAll('[data-hero]').forEach(function (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
    var prev = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    var current = 0;
    var timer = null;

    function show(index) {
      if (!slides.length) {
        return;
      }
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === current);
      });
    }

    function restart() {
      if (timer) {
        clearInterval(timer);
      }
      timer = setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    if (prev) {
      prev.addEventListener('click', function () {
        show(current - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        show(current + 1);
        restart();
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        show(index);
        restart();
      });
    });

    show(0);
    restart();
  });

  document.querySelectorAll('[data-scroll-row]').forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.querySelector(button.getAttribute('data-scroll-row'));
      if (!target) {
        return;
      }
      var direction = button.getAttribute('data-direction') === 'left' ? -1 : 1;
      target.scrollBy({ left: direction * 460, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-search-input]').forEach(function (input) {
    var scopeSelector = input.getAttribute('data-search-input');
    var scope = scopeSelector ? document.querySelector(scopeSelector) : document;
    var empty = document.querySelector(input.getAttribute('data-empty-target') || '');

    input.addEventListener('input', function () {
      var value = input.value.trim().toLowerCase();
      var cards = scope ? Array.prototype.slice.call(scope.querySelectorAll('.movie-card')) : [];
      var visible = 0;

      cards.forEach(function (card) {
        var content = (card.getAttribute('data-search') || card.textContent || '').toLowerCase();
        var matched = !value || content.indexOf(value) !== -1;
        card.hidden = !matched;
        if (matched) {
          visible += 1;
        }
      });

      if (empty) {
        empty.classList.toggle('show', visible === 0);
      }
    });
  });
})();

function initMoviePlayer(videoId, overlayId, sourceUrl) {
  var video = document.getElementById(videoId);
  var overlay = document.getElementById(overlayId);
  var started = false;
  var hlsInstance = null;

  if (!video || !overlay || !sourceUrl) {
    return;
  }

  function start() {
    overlay.classList.add('is-hidden');

    if (!started) {
      started = true;

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = sourceUrl;
        video.play().catch(function () {});
      } else if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new Hls({ enableWorker: true });
        hlsInstance.loadSource(sourceUrl);
        hlsInstance.attachMedia(video);
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play().catch(function () {});
        });
      } else {
        video.src = sourceUrl;
        video.play().catch(function () {});
      }
    } else {
      video.play().catch(function () {});
    }
  }

  overlay.addEventListener('click', start);
  video.addEventListener('click', function () {
    if (!started || video.paused) {
      start();
    }
  });
  video.addEventListener('play', function () {
    overlay.classList.add('is-hidden');
  });
  video.addEventListener('ended', function () {
    overlay.classList.remove('is-hidden');
  });
  window.addEventListener('beforeunload', function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
}
