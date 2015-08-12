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

    this._connectVideos();

    $(".js-project-block").on("click", function(event) {
      if(!event.target.className.match("collaborators")) {
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
      }
    });

    this._collab();

    if (Portfolio.utils.isSafari()) {
      this._ifSafari();
    }

    Portfolio.utils.autoPlayVideo($("video"));

    this._resizeVideoAndImage();
    $(window).on("resize", function (event) {
      _.debounce(_this._resizeVideoAndImage, 150)();
    });
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
        Portfolio.utils.toggleFullScreen($(".asteroids")[0]);
      }
    });
  },

  _collab: function () {
    var _this = this;

    $(".projects li button.collaborators").one("click", function (event) {
      var projectName = event.target.parentElement.parentElement.dataset.projectName;

      $(".projects li." + projectName).addClass("flip");
      setTimeout(function () {
        $(".projects li." + projectName).removeClass("flip");
        _this._collab();
      }, 1500);
    });
  },

  _connectVideos: function() {
    $(".js-project-LLC")[0].src       = Portfolio.ProjectsSection.videoUrls.LLC;
    $(".js-project-asteroids")[0].src = Portfolio.ProjectsSection.videoUrls.asteroids;
    $(".js-project-princess")[0].src  = Portfolio.ProjectsSection.videoUrls.princess;
    $(".js-project-snake")[0].src     = Portfolio.ProjectsSection.videoUrls.snake;
    $(".js-project-trello")[0].src    = Portfolio.ProjectsSection.videoUrls.trello;
    $(".js-project-chess")[0].src     = Portfolio.ProjectsSection.videoUrls.chess;
  },

  _modalSetup: function () {
    var $infoModal = $(".info-modal");

    Portfolio.utils.autoPlayVideo($(".info-modal video"));

    setTimeout(function () {
      $infoModal.removeClass("init")
      $infoModal.addClass("mid")

      setTimeout(function () {
        $infoModal.removeClass("mid")
        $infoModal.addClass("final")
      }, 500);
    }, 100);

    $(".shadow").removeClass("hidden");
    window.yCorrToReturnTo = $(window).scrollTop();
    $(".window").addClass("hide-overflow");
  },

  _resizeVideoAndImage: function() {
    var $projectLi    = $(".projects ul li"),
        $projectImage = $(".projects ul li .back img"),
        adjustedWidth = $projectLi.width() * 750 / 1250;

    $projectLi.css("height", 51 + adjustedWidth);
    $projectImage.css("height", adjustedWidth);
  },

  _snakeCallback: function() {
    $(".snake-game").removeClass("hidden");
    $(".info-modal").addClass("hidden");
  }
};