(function () {
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var mobilePanel = document.querySelector('[data-mobile-panel]');

  if (menuToggle && mobilePanel) {
    menuToggle.addEventListener('click', function () {
      mobilePanel.classList.toggle('open');
      document.body.classList.toggle('locked', mobilePanel.classList.contains('open'));
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
  var heroIndex = 0;

  function showHero(index) {
    if (!slides.length) {
      return;
    }

    heroIndex = (index + slides.length) % slides.length;
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle('active', slideIndex === heroIndex);
    });
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle('active', dotIndex === heroIndex);
    });
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      showHero(index);
    });
  });

  if (slides.length > 1) {
    setInterval(function () {
      showHero(heroIndex + 1);
    }, 5200);
  }

  var filterForms = Array.prototype.slice.call(document.querySelectorAll('[data-filter-form]'));

  filterForms.forEach(function (form) {
    var scope = document.querySelector(form.getAttribute('data-filter-form')) || document;
    var cards = Array.prototype.slice.call(scope.querySelectorAll('.movie-card'));
    var noResults = document.querySelector(form.getAttribute('data-empty-target'));

    function normalize(value) {
      return (value || '').toString().trim().toLowerCase();
    }

    function applyFilters() {
      var keyword = normalize(form.querySelector('[name="keyword"]') && form.querySelector('[name="keyword"]').value);
      var region = normalize(form.querySelector('[name="region"]') && form.querySelector('[name="region"]').value);
      var type = normalize(form.querySelector('[name="type"]') && form.querySelector('[name="type"]').value);
      var year = normalize(form.querySelector('[name="year"]') && form.querySelector('[name="year"]').value);
      var visible = 0;

      cards.forEach(function (card) {
        var text = normalize([
          card.dataset.title,
          card.dataset.region,
          card.dataset.type,
          card.dataset.year,
          card.dataset.genre,
          card.dataset.tags
        ].join(' '));
        var ok = true;

        if (keyword && text.indexOf(keyword) === -1) {
          ok = false;
        }
        if (region && normalize(card.dataset.region).indexOf(region) === -1) {
          ok = false;
        }
        if (type && normalize(card.dataset.type).indexOf(type) === -1) {
          ok = false;
        }
        if (year && normalize(card.dataset.year).indexOf(year) === -1) {
          ok = false;
        }

        card.style.display = ok ? '' : 'none';
        if (ok) {
          visible += 1;
        }
      });

      if (noResults) {
        noResults.classList.toggle('show', visible === 0);
      }
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      applyFilters();
    });
    form.addEventListener('input', applyFilters);
    form.addEventListener('change', applyFilters);
  });
})();
