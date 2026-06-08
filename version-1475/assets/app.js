function selectAll(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
}

function initMenu() {
    var button = document.querySelector('[data-menu-button]');
    var menu = document.querySelector('[data-mobile-menu]');
    if (!button || !menu) {
        return;
    }
    button.addEventListener('click', function () {
        menu.classList.toggle('is-open');
    });
}

function initHero() {
    var hero = document.querySelector('[data-hero]');
    if (!hero) {
        return;
    }
    var slides = selectAll('.hero-slide', hero);
    var dots = selectAll('[data-hero-dot]', hero);
    var prev = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    var index = 0;
    var timer = null;

    function show(nextIndex) {
        if (!slides.length) {
            return;
        }
        index = (nextIndex + slides.length) % slides.length;
        slides.forEach(function (slide, itemIndex) {
            slide.classList.toggle('is-active', itemIndex === index);
        });
        dots.forEach(function (dot, itemIndex) {
            dot.classList.toggle('is-active', itemIndex === index);
        });
    }

    function start() {
        window.clearInterval(timer);
        timer = window.setInterval(function () {
            show(index + 1);
        }, 5200);
    }

    dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
            show(Number(dot.getAttribute('data-hero-dot')) || 0);
            start();
        });
    });

    if (prev) {
        prev.addEventListener('click', function () {
            show(index - 1);
            start();
        });
    }

    if (next) {
        next.addEventListener('click', function () {
            show(index + 1);
            start();
        });
    }

    show(0);
    start();
}

function normalizeText(value) {
    return String(value || '').toLowerCase().trim();
}

function initFilters() {
    var panels = selectAll('[data-filter-panel]');
    panels.forEach(function (panel) {
        var section = panel.closest('section') || document;
        var list = section.querySelector('[data-filter-list]');
        if (!list) {
            list = document.querySelector('[data-filter-list]');
        }
        if (!list) {
            return;
        }
        var input = panel.querySelector('[data-filter-input]');
        var type = panel.querySelector('[data-filter-type]');
        var region = panel.querySelector('[data-filter-region]');
        var cards = selectAll('.searchable-card', list);

        function apply() {
            var keyword = normalizeText(input && input.value);
            var typeValue = normalizeText(type && type.value);
            var regionValue = normalizeText(region && region.value);
            cards.forEach(function (card) {
                var haystack = normalizeText([
                    card.getAttribute('data-title'),
                    card.getAttribute('data-region'),
                    card.getAttribute('data-type'),
                    card.getAttribute('data-genre'),
                    card.getAttribute('data-tags'),
                    card.getAttribute('data-year')
                ].join(' '));
                var matchKeyword = !keyword || haystack.indexOf(keyword) !== -1;
                var matchType = !typeValue || haystack.indexOf(typeValue) !== -1;
                var matchRegion = !regionValue || haystack.indexOf(regionValue) !== -1;
                card.classList.toggle('is-hidden', !(matchKeyword && matchType && matchRegion));
            });
        }

        [input, type, region].forEach(function (control) {
            if (control) {
                control.addEventListener('input', apply);
                control.addEventListener('change', apply);
            }
        });
        apply();
    });
}

function initSearchPage() {
    var params = new URLSearchParams(window.location.search);
    var query = params.get('q') || '';
    var input = document.querySelector('[data-filter-input]');
    if (input) {
        input.value = query;
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

function attachStream(video, source) {
    if (!video || !source) {
        return false;
    }
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        return true;
    }
    if (window.Hls && window.Hls.isSupported()) {
        var hls = new window.Hls({ enableWorker: true });
        hls.loadSource(source);
        hls.attachMedia(video);
        video._hls = hls;
        return true;
    }
    video.src = source;
    return true;
}

function initMoviePlayer(videoId, coverId, source) {
    var video = document.getElementById(videoId);
    var cover = document.getElementById(coverId);
    if (!video || !cover) {
        return;
    }
    var ready = false;

    function begin() {
        if (!ready) {
            ready = attachStream(video, source);
        }
        cover.classList.add('is-hidden');
        video.setAttribute('controls', 'controls');
        var action = video.play();
        if (action && typeof action.catch === 'function') {
            action.catch(function () {});
        }
    }

    cover.addEventListener('click', begin);
    video.addEventListener('click', function () {
        if (!ready) {
            begin();
            return;
        }
        if (video.paused) {
            var action = video.play();
            if (action && typeof action.catch === 'function') {
                action.catch(function () {});
            }
        } else {
            video.pause();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initHero();
    initFilters();
});
