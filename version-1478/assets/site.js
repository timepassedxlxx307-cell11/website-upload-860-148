(function () {
  function all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function text(value) {
    return (value || "").toString().toLowerCase().trim();
  }

  function setupMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".mobile-menu");
    if (!toggle || !menu) {
      return;
    }
    toggle.addEventListener("click", function () {
      var opened = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", opened ? "false" : "true");
      menu.hidden = opened;
    });
  }

  function setupHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }
    var slides = all(".hero-slide", hero);
    var dots = all(".hero-dot", hero);
    var prev = hero.querySelector(".hero-prev");
    var next = hero.querySelector(".hero-next");
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      if (!slides.length) {
        return;
      }
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, current) {
        slide.classList.toggle("is-active", current === index);
      });
      dots.forEach(function (dot, current) {
        dot.classList.toggle("is-active", current === index);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5000);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
      }
    }

    if (prev) {
      prev.addEventListener("click", function () {
        show(index - 1);
        start();
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        show(index + 1);
        start();
      });
    }
    dots.forEach(function (dot, current) {
      dot.addEventListener("click", function () {
        show(current);
        start();
      });
    });
    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    show(0);
    start();
  }

  function setupFilters() {
    var scope = document.querySelector("[data-filter-scope]");
    if (!scope) {
      return;
    }
    var params = new URLSearchParams(window.location.search);
    var queryInput = scope.querySelector(".js-filter-input");
    var regionSelect = scope.querySelector(".js-filter-region");
    var typeSelect = scope.querySelector(".js-filter-type");
    var yearSelect = scope.querySelector(".js-filter-year");
    var cards = all(".movie-card, .rank-item, .compact-card", scope);
    var count = scope.querySelector(".result-count strong");
    var empty = scope.querySelector(".cards-empty");
    var queryValue = params.get("q") || "";
    if (queryInput && queryValue) {
      queryInput.value = queryValue;
    }

    function matchCard(card) {
      var q = queryInput ? text(queryInput.value) : "";
      var region = regionSelect ? regionSelect.value : "";
      var type = typeSelect ? typeSelect.value : "";
      var year = yearSelect ? yearSelect.value : "";
      var haystack = [
        card.getAttribute("data-title"),
        card.getAttribute("data-region"),
        card.getAttribute("data-type"),
        card.getAttribute("data-year"),
        card.getAttribute("data-genre"),
        card.getAttribute("data-tags")
      ].map(text).join(" ");
      if (q && haystack.indexOf(q) === -1) {
        return false;
      }
      if (region && card.getAttribute("data-region") !== region) {
        return false;
      }
      if (type && card.getAttribute("data-type") !== type) {
        return false;
      }
      if (year && card.getAttribute("data-year") !== year) {
        return false;
      }
      return true;
    }

    function apply() {
      var visible = 0;
      cards.forEach(function (card) {
        var ok = matchCard(card);
        card.style.display = ok ? "" : "none";
        if (ok) {
          visible += 1;
        }
      });
      if (count) {
        count.textContent = visible.toString();
      }
      if (empty) {
        empty.classList.toggle("is-visible", visible === 0);
      }
    }

    [queryInput, regionSelect, typeSelect, yearSelect].forEach(function (control) {
      if (control) {
        control.addEventListener("input", apply);
        control.addEventListener("change", apply);
      }
    });
    apply();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupMenu();
    setupHero();
    setupFilters();
  });
})();
