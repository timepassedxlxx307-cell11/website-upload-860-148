(function () {
    var toggle = document.querySelector('[data-menu-toggle]');
    var nav = document.querySelector('[data-main-nav]');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('is-open');
        });
    }

    document.querySelectorAll('[data-hero]').forEach(function (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
        var prev = hero.querySelector('[data-hero-prev]');
        var next = hero.querySelector('[data-hero-next]');
        var index = 0;
        var timer = null;

        function show(target) {
            if (!slides.length) {
                return;
            }

            index = (target + slides.length) % slides.length;
            slides.forEach(function (slide, position) {
                slide.classList.toggle('active', position === index);
            });
            dots.forEach(function (dot, position) {
                dot.classList.toggle('active', position === index);
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
                timer = null;
            }
        }

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

        dots.forEach(function (dot, position) {
            dot.addEventListener('click', function () {
                show(position);
                start();
            });
        });

        hero.addEventListener('mouseenter', stop);
        hero.addEventListener('mouseleave', start);
        show(0);
        start();
    });

    document.querySelectorAll('[data-filter-input]').forEach(function (input) {
        var container = input.closest('.content-section') || document;
        var cards = Array.prototype.slice.call(container.querySelectorAll('[data-card]'));
        var count = container.querySelector('[data-filter-count]');

        function update() {
            var query = input.value.trim().toLowerCase();
            var shown = 0;

            cards.forEach(function (card) {
                var value = (card.getAttribute('data-search') || card.textContent || '').toLowerCase();
                var matched = !query || value.indexOf(query) !== -1;
                card.classList.toggle('is-hidden', !matched);
                if (matched) {
                    shown += 1;
                }
            });

            if (count) {
                count.textContent = shown + ' 部影片';
            }
        }

        input.addEventListener('input', update);

        var params = new URLSearchParams(window.location.search);
        var q = params.get('q');
        if (q) {
            input.value = q;
        }
        update();
    });
})();
