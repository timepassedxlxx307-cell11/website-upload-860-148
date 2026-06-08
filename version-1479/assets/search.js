(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    var data = window.movieSearchData || [];
    var form = document.querySelector('[data-search-form]');
    var input = document.querySelector('[data-search-input]');
    var results = document.querySelector('[data-search-results]');
    var empty = document.querySelector('[data-search-empty]');

    if (!form || !input || !results) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var initial = params.get('q') || '';
    input.value = initial;

    function normalize(value) {
      return (value || '').toString().trim().toLowerCase();
    }

    function render(list) {
      results.innerHTML = list.map(function (movie) {
        return '<a class="movie-card" href="./' + movie.file + '" data-title="' + escapeHtml(movie.title) + '" data-region="' + escapeHtml(movie.region) + '" data-type="' + escapeHtml(movie.type) + '" data-year="' + escapeHtml(movie.year) + '" data-genre="' + escapeHtml(movie.genre) + '">' +
          '<span class="poster-frame">' +
            '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
            '<span class="poster-shade"></span>' +
            '<span class="card-play">▶</span>' +
          '</span>' +
          '<span class="movie-info">' +
            '<strong>' + escapeHtml(movie.title) + '</strong>' +
            '<em>' + escapeHtml(movie.region + ' · ' + movie.year + ' · ' + movie.type) + '</em>' +
            '<p>' + escapeHtml(movie.oneLine) + '</p>' +
          '</span>' +
        '</a>';
      }).join('');
      if (empty) {
        empty.classList.toggle('show', list.length === 0);
      }
    }

    function search() {
      var query = normalize(input.value);
      var list = data.filter(function (movie) {
        if (!query) {
          return true;
        }
        return normalize([movie.title, movie.region, movie.type, movie.year, movie.genre, movie.tags, movie.oneLine].join(' ')).indexOf(query) !== -1;
      });
      render(list.slice(0, 120));
    }

    function escapeHtml(value) {
      return String(value || '').replace(/[&<>"']/g, function (char) {
        return {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        }[char];
      });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      search();
    });
    input.addEventListener('input', search);
    search();
  });
})();
