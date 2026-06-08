(function () {
    var video = document.querySelector('[data-video-player]');
    var button = document.querySelector('[data-play-button]');

    if (!video) {
        return;
    }

    var source = video.getAttribute('data-video-src');
    var hlsInstance = null;
    var initialized = false;

    function attachNative() {
        video.src = source;
        initialized = true;
    }

    function attachHls() {
        if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new window.Hls({
                enableWorker: true,
                lowLatencyMode: false,
                backBufferLength: 90
            });
            hlsInstance.loadSource(source);
            hlsInstance.attachMedia(video);
            initialized = true;
            return;
        }

        attachNative();
    }

    function initialize() {
        if (initialized || !source) {
            return;
        }

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            attachNative();
            return;
        }

        attachHls();
    }

    function beginPlayback() {
        initialize();

        if (button) {
            button.classList.add('is-hidden');
        }

        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function () {});
        }
    }

    if (button) {
        button.addEventListener('click', beginPlayback);
    }

    video.addEventListener('click', function () {
        if (video.paused) {
            beginPlayback();
        }
    });

    video.addEventListener('play', function () {
        if (button) {
            button.classList.add('is-hidden');
        }
    });

    video.addEventListener('error', function () {
        if (!initialized) {
            initialize();
        }
    });

    window.addEventListener('beforeunload', function () {
        if (hlsInstance && typeof hlsInstance.destroy === 'function') {
            hlsInstance.destroy();
        }
    });
})();
