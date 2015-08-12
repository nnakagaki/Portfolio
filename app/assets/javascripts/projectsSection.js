Portfolio.ProjectsSection = {
  initialize: function() {
    var _this = this,
        projectCallbacks = {
          LLC       : this._appendIframe.bind(this, 'https://life-long-connections.herokuapp.com'),
          princess  : this._appendIframe.bind(this, 'https://princess-diary.herokuapp.com'),
          trello    : this._appendIframe.bind(this, 'https://norris-trello-clone.herokuapp.com'),
          asteroids : this._asteroidCallback,
          snake     : this._snakeCallback
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

      _this._modalSetup();
    });

    this._collab();

    if (Portfolio.utils.isSafari()) {
      this._ifSafari();
    }

    Portfolio.utils.autoPlayVideo($("video"));
  },

  _appendIframe: function(src) {
    $("body").append("<iframe src=" + src + "></iframe>");
  },

  _asteroidCallback: function(event) {
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

  _collab: function () {
    $(".projects li button.collaborators").one("click", function (event) {
      var projectName = event.target.parentElement.parentElement.className;

      $(".projects li." + projectName).addClass("flip");
      setTimeout(function () {
        $(".projects li." + projectName).removeClass("flip");
        collab();
      }, 1500);
    });
  },

  _ifSafari: function() {
    $(".js-project-LLC")[0].src       = "<%= video_url('LLC_demo.mp4') %>";
    $(".js-project-asteroids")[0].src = "<%= video_url('asteroids_gameplay_editted2.mp4') %>";
    $(".js-project-princess")[0].src  = "<%= video_url('princess_demo_test.mp4') %>";
    $(".js-project-snake")[0].src     = "<%= video_url('snake_gameplay_cropped.mp4') %>";
    $(".js-project-trello")[0].src    = "<%= video_url('trello_demo_cropped.mp4') %>";
    $(".js-project-chess")[0].src     = "<%= video_url('chess_demo.mp4') %>";
  },

  _modalSetup: function () {
    Portfolio.utils.autoPlayVideo($(".info-modal video"));

    setTimeout(function () {
      $(".info-modal").removeClass("init")
      $(".info-modal").addClass("mid")

      setTimeout(function () {
        $(".info-modal").removeClass("mid")
        $(".info-modal").addClass("final")
      }, 500);
    }, 100);

    $(".shadow").removeClass("hidden");
    window.yCorrToReturnTo = $(window).scrollTop();
    $(".window").addClass("hide-overflow");
  },

  _snakeCallback: function() {
    $(".snake-game").removeClass("hidden");
    $(".info-modal").addClass("hidden");
  }
};