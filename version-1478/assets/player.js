(function () {
  window.initMoviePlayer = function (videoId, buttonId, source) {
    var video = document.getElementById(videoId);
    var button = document.getElementById(buttonId);
    var attached = false;
    var hls = null;

    if (!video || !button || !source) {
      return;
    }

    function attachSource() {
      return new Promise(function (resolve) {
        if (attached) {
          resolve();
          return;
        }
        attached = true;
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = source;
          resolve();
          return;
        }
        if (window.Hls && window.Hls.isSupported()) {
          hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true
          });
          hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            hls.loadSource(source);
            resolve();
          });
          hls.attachMedia(video);
          return;
        }
        video.src = source;
        resolve();
      });
    }

    function showButton() {
      button.classList.remove("is-hidden");
    }

    function hideButton() {
      button.classList.add("is-hidden");
    }

    function startPlay() {
      hideButton();
      attachSource().then(function () {
        var action = video.play();
        if (action && typeof action.catch === "function") {
          action.catch(function () {
            showButton();
          });
        }
      });
    }

    button.addEventListener("click", startPlay);
    video.addEventListener("click", function () {
      if (video.paused) {
        startPlay();
      }
    });
    video.addEventListener("play", hideButton);
    video.addEventListener("pause", function () {
      if (!video.ended) {
        showButton();
      }
    });
    window.addEventListener("beforeunload", function () {
      if (hls) {
        hls.destroy();
      }
    });
  };
})();
