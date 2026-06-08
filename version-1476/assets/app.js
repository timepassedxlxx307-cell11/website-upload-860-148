(function () {
    const navToggle = document.querySelector('[data-nav-toggle]');
    const mainNav = document.querySelector('[data-main-nav]');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            mainNav.classList.toggle('is-open');
        });
    }

    const hero = document.querySelector('[data-hero]');
    if (hero) {
        const slides = Array.from(hero.querySelectorAll('[data-hero-slide]'));
        const dots = Array.from(hero.querySelectorAll('[data-hero-dot]'));
        let current = 0;

        const showSlide = function (index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === current);
            });
        };

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                showSlide(Number(dot.getAttribute('data-hero-dot')) || 0);
            });
        });

        if (slides.length > 1) {
            window.setInterval(function () {
                showSlide(current + 1);
            }, 5200);
        }
    }

    const searchInputs = Array.from(document.querySelectorAll('[data-search-input]'));
    const movieCards = Array.from(document.querySelectorAll('[data-movie-card]'));
    const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
    const activeFilters = {
        year: 'all',
        region: 'all'
    };

    const normalize = function (value) {
        return String(value || '').toLowerCase().trim();
    };

    const applyFilters = function () {
        const query = normalize(searchInputs.map(function (input) {
            return input.value;
        }).join(' '));

        movieCards.forEach(function (card) {
            const haystack = normalize([
                card.getAttribute('data-title'),
                card.getAttribute('data-region'),
                card.getAttribute('data-year'),
                card.getAttribute('data-type'),
                card.getAttribute('data-tags')
            ].join(' '));
            const matchSearch = !query || haystack.includes(query);
            const matchYear = activeFilters.year === 'all' || card.getAttribute('data-year') === activeFilters.year;
            const matchRegion = activeFilters.region === 'all' || card.getAttribute('data-region') === activeFilters.region;
            card.classList.toggle('is-search-hidden', !(matchSearch && matchYear && matchRegion));
        });
    };

    searchInputs.forEach(function (input) {
        input.addEventListener('input', applyFilters);
    });

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const type = button.getAttribute('data-filter');
            const value = button.getAttribute('data-value');
            activeFilters[type] = value;
            filterButtons
                .filter(function (item) {
                    return item.getAttribute('data-filter') === type;
                })
                .forEach(function (item) {
                    item.classList.toggle('is-active', item === button);
                });
            applyFilters();
        });
    });
})();

function initMoviePlayer(source) {
    const video = document.getElementById('movie-player');
    const overlay = document.querySelector('[data-player-overlay]');
    let loaded = false;

    if (!video || !overlay || !source) {
        return;
    }

    const start = function () {
        if (!loaded) {
            loaded = true;
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = source;
            } else if (window.Hls && window.Hls.isSupported()) {
                const hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hls.loadSource(source);
                hls.attachMedia(video);
            } else {
                video.src = source;
            }
        }
        overlay.classList.add('is-hidden');
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function () {});
        }
    };

    overlay.addEventListener('click', start);
    video.addEventListener('click', function () {
        if (!loaded) {
            start();
        }
    });
}
