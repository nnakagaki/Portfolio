Portfolio.ProjectsSection = {
  initialize: function() {
    var _this = this,
        projectCallbacks = {
          LLC       : this.appendIframe.bind(this, 'https://life-long-connections.herokuapp.com'),
          princess  : this.appendIframe.bind(this, 'https://princess-diary.herokuapp.com'),
          trello    : this.appendIframe.bind(this, 'https://norris-trello-clone.herokuapp.com'),
          asteroids : this.asteroidCallback,
          snake     : this.snakeCallback
        };

    $(".js-project-block").on("click", function(event) {
      var projectName = $(event.currentTarget).data("project-name");

      $("body").append(JST[projectName]({
        video_url : _this.videoUrls[projectName]
      }));

      if (projectCallbacks[projectName]) {
        $("div.info-modal div.iframe").on("click", function (event) {
          projectCallbacks[projectName]();
        });
      }

      _this.modalSetup();
    });
  },

  appendIframe: function(src) {
    $("body").append("<iframe src=" + src + "></iframe>");
  },

  asteroidCallback: function(event) {
    $(".asteroids").removeClass("hidden");
    $(".info-modal").addClass("hidden");
    Asteroids.Music.menuAudio.volume = 1;
    Asteroids.Music.menuAudio.currentTime = 0;
    Asteroids.Music.menuAudio.play();

    $(window).on("keyup", function (event) {
      if (event.keyCode === 13) {
        toggleFullScreen($(".asteroids")[0]);
      }
    });
  },

  snakeCallback: function() {
    $(".snake-game").removeClass("hidden");
    $(".info-modal").addClass("hidden");
  },

  modalSetup: function () {
    $(".info-modal video").on("mouseenter", function (event) {
      if (event.currentTarget.readyState === 4) {
        event.currentTarget.play();
      }
    });

    $(".info-modal video").on("mouseleave", function (event) {
      if (event.currentTarget.readyState === 4) {
        event.currentTarget.pause();
        event.currentTarget.currentTime = 0;
      }
    });

    setTimeout(function () {
      $(".info-modal").removeClass("init")
      $(".info-modal").addClass("mid")

      setTimeout(function () {
        $(".info-modal").removeClass("mid")
        $(".info-modal").addClass("final")
      }, 500)
    }, 100);

    $(".shadow").removeClass("hidden");
    window.yCorrToReturnTo = $(window).scrollTop();
    $(".window").addClass("hide-overflow");
  }
};