(function () {
  function text(value) {
    return String(value || "").toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function initMobileNav() {
    var button = document.querySelector(".mobile-menu-button");
    var nav = document.getElementById("mobile-nav");
    if (!button || !nav) {
      return;
    }
    button.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function initHero() {
    var slider = document.querySelector("[data-hero-slider]");
    if (!slider) {
      return;
    }
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(slider.querySelectorAll(".hero-dot"));
    if (!slides.length) {
      return;
    }
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(Number(dot.getAttribute("data-hero-index")) || 0);
        start();
      });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    start();
  }

  function initCardFilters() {
    var forms = Array.prototype.slice.call(document.querySelectorAll("[data-card-filter]"));
    forms.forEach(function (form) {
      var scope = form.parentElement || document;
      var cards = Array.prototype.slice.call(scope.querySelectorAll("[data-filter-card]"));
      var keyword = form.querySelector('[name="keyword"]');
      var year = form.querySelector('[name="year"]');
      var type = form.querySelector('[name="type"]');
      var region = form.querySelector('[name="region"]');

      function apply() {
        var q = text(keyword && keyword.value);
        var y = text(year && year.value);
        var t = text(type && type.value);
        var r = text(region && region.value);
        cards.forEach(function (card) {
          var haystack = text([
            card.getAttribute("data-title"),
            card.getAttribute("data-region"),
            card.getAttribute("data-year"),
            card.getAttribute("data-type"),
            card.getAttribute("data-genre")
          ].join(" "));
          var matched = true;
          if (q && haystack.indexOf(q) === -1) {
            matched = false;
          }
          if (y && text(card.getAttribute("data-year")) !== y) {
            matched = false;
          }
          if (t && text(card.getAttribute("data-type")) !== t) {
            matched = false;
          }
          if (r && text(card.getAttribute("data-region")) !== r) {
            matched = false;
          }
          card.classList.toggle("is-hidden-by-filter", !matched);
        });
      }

      form.addEventListener("input", apply);
      form.addEventListener("change", apply);
    });
  }

  function cardTemplate(movie) {
    var tags = (movie.tags || []).slice(0, 3).map(function (tag) {
      return "<span>" + escapeHtml(tag) + "</span>";
    }).join("");
    return [
      '<article class="movie-card">',
      '<a href="' + escapeHtml(movie.url) + '" class="movie-card-link" aria-label="' + escapeHtml(movie.title) + '">',
      '<div class="movie-card-poster">',
      '<img src="' + escapeHtml(movie.cover) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
      '<span class="movie-card-badge">' + escapeHtml(movie.region) + '</span>',
      '<span class="movie-card-play">▶</span>',
      '</div>',
      '<div class="movie-card-body">',
      '<h3>' + escapeHtml(movie.title) + '</h3>',
      '<p>' + escapeHtml(movie.oneLine) + '</p>',
      '<div class="movie-card-meta"><span>' + escapeHtml(movie.type) + '</span><span>' + escapeHtml(movie.year) + '</span></div>',
      '<div class="movie-tag-row">' + tags + '</div>',
      '</div>',
      '</a>',
      '</article>'
    ].join("");
  }

  function initSearchPage() {
    var panel = document.getElementById("searchPanel");
    var results = document.getElementById("searchResults");
    var status = document.getElementById("searchStatus");
    if (!panel || !results || !status || !window.SEARCH_MOVIES) {
      return;
    }
    var input = document.getElementById("searchInput");
    var year = document.getElementById("searchYear");
    var type = document.getElementById("searchType");
    var params = new URLSearchParams(window.location.search);
    if (params.get("q")) {
      input.value = params.get("q");
    }

    function render() {
      var q = text(input.value).trim();
      var y = text(year.value);
      var t = text(type.value);
      var matched = window.SEARCH_MOVIES.filter(function (movie) {
        var haystack = text([movie.title, movie.region, movie.type, movie.year, movie.genre, movie.oneLine, (movie.tags || []).join(" ")].join(" "));
        if (q && haystack.indexOf(q) === -1) {
          return false;
        }
        if (y && text(movie.year) !== y) {
          return false;
        }
        if (t && text(movie.type) !== t) {
          return false;
        }
        return true;
      }).slice(0, 120);
      results.innerHTML = matched.map(cardTemplate).join("");
      status.textContent = matched.length ? "已匹配相关片单" : "没有找到相关片单";
    }

    panel.addEventListener("submit", function (event) {
      event.preventDefault();
      render();
    });
    panel.addEventListener("input", render);
    panel.addEventListener("change", render);
    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initHero();
    initCardFilters();
    initSearchPage();
  });
})();
