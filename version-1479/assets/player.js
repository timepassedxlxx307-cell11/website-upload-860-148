(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    var video = document.querySelector('[data-player]');
    var button = document.querySelector('[data-play-button]');

    if (!video) {
      return;
    }

    var stream = video.getAttribute('data-stream');
    var hls = null;

    function attachStream() {
      if (!stream || video.dataset.bound === '1') {
        return;
      }

      video.dataset.bound = '1';

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = stream;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(stream);
        hls.attachMedia(video);
      } else {
        video.src = stream;
      }
    }

    function hideButton() {
      if (button) {
        button.classList.add('hidden');
      }
    }

    function startPlayback() {
      attachStream();
      hideButton();
      var promise = video.play();

      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {});
      }
    }

    attachStream();

    if (button) {
      button.addEventListener('click', startPlayback);
    }

    video.addEventListener('play', hideButton);
    video.addEventListener('click', function () {
      if (video.paused) {
        startPlayback();
      }
    });
    window.addEventListener('beforeunload', function () {
      if (hls) {
        hls.destroy();
      }
    });
  });
})();
