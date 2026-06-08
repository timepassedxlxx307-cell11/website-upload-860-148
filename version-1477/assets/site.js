(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var mobile = document.querySelector('[data-mobile-nav]');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      mobile.classList.toggle('open');
    });
  }

  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var prev = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      if (!slides.length) {
        return;
      }
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5000);
    }

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }
      start();
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        show(i);
        restart();
      });
    });

    if (prev) {
      prev.addEventListener('click', function () {
        show(index - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        show(index + 1);
        restart();
      });
    }

    show(0);
    start();
  }

  function normalize(value) {
    return String(value || '').toLowerCase().trim();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  var filterInput = document.querySelector('[data-filter-input]');
  var filterSelect = document.querySelector('[data-filter-select="year"]');
  var filterCards = Array.prototype.slice.call(document.querySelectorAll('[data-filter-card]'));

  function filterCardsNow() {
    var query = normalize(filterInput ? filterInput.value : '');
    var year = normalize(filterSelect ? filterSelect.value : '');
    filterCards.forEach(function (card) {
      var text = normalize([
        card.getAttribute('data-title'),
        card.getAttribute('data-region'),
        card.getAttribute('data-genre'),
        card.getAttribute('data-year'),
        card.textContent
      ].join(' '));
      var cardYear = normalize(card.getAttribute('data-year'));
      var matchQuery = !query || text.indexOf(query) !== -1;
      var matchYear = !year || cardYear === year;
      card.classList.toggle('hidden-by-filter', !(matchQuery && matchYear));
    });
  }

  if (filterInput) {
    filterInput.addEventListener('input', filterCardsNow);
  }

  if (filterSelect) {
    filterSelect.addEventListener('change', filterCardsNow);
  }

  var indexData = Array.isArray(window.SEARCH_INDEX) ? window.SEARCH_INDEX : [];
  var searchInputs = Array.prototype.slice.call(document.querySelectorAll('[data-global-search]'));

  function renderResults(input) {
    var wrap = input.closest('[data-global-search-wrap]');
    var panel = wrap ? wrap.querySelector('[data-global-results]') : null;
    if (!panel) {
      return;
    }
    var query = normalize(input.value);
    if (!query) {
      panel.classList.remove('active');
      panel.innerHTML = '';
      return;
    }
    var results = indexData.filter(function (item) {
      return normalize(item.text).indexOf(query) !== -1;
    }).slice(0, 12);

    var inSubdir = /\/(movies|categories)\//.test(window.location.pathname);
    var prefix = inSubdir ? '../' : './';
    panel.innerHTML = results.map(function (item) {
      var title = escapeHtml(item.title);
      var meta = escapeHtml(item.meta);
      return '<a class="search-result-item" href="' + prefix + item.href + '">' +
        '<img src="' + prefix + item.image + '" alt="' + title + '">' +
        '<span><strong>' + title + '</strong><span>' + meta + '</span></span>' +
        '</a>';
    }).join('');
    panel.classList.toggle('active', results.length > 0);
  }

  searchInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      renderResults(input);
    });
    input.addEventListener('focus', function () {
      renderResults(input);
    });
  });

  document.addEventListener('click', function (event) {
    searchInputs.forEach(function (input) {
      var wrap = input.closest('[data-global-search-wrap]');
      var panel = wrap ? wrap.querySelector('[data-global-results]') : null;
      if (wrap && panel && !wrap.contains(event.target)) {
        panel.classList.remove('active');
      }
    });
  });
})();
