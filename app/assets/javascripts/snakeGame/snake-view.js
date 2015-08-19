(function () {
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var View = SnakeGame.View = function($el) {
    this.el = $el;
    this.board = new SnakeGame.Board();
    this.keyBinding();
    this.preRender();
    this.reSizing();

    var that = this;
    $("div.snake-game-view").append("<h1 class='new-game'>New Game</h1>")
    $("div.snake-game-view h1.new-game").one("click", function (event) {
      $("div.snake-game-view h1.new-game").remove();
      that.run();
    });

    $(window).on("resize", function(event) {
      that.reSizing();
    });
  }

  View.prototype.keyBinding = function () {
    var that = this;
    $("html").keydown(function(event) {
      if (event.keyCode === 87 || event.keyCode === 38) {
        if (!that.paused) {
          that.board.snake.turn([0, -1]);
        }
      } else if (event.keyCode === 65 || event.keyCode === 37) {
        if (!that.paused) {
          that.board.snake.turn([1, 0]);
        }
      } else if (event.keyCode === 83 || event.keyCode === 40) {
        if (!that.paused) {
          that.board.snake.turn([0, 1]);
        }
      } else if (event.keyCode === 68 || event.keyCode === 39) {
        if (!that.paused) {
          that.board.snake.turn([-1, 0]);
        }
      } else if (event.keyCode === 27) {
        if (that.intID) {
          if (!that.paused) {
            window.clearInterval(that.intID);
            that.paused = true;
            $("div.snake-game-view").append("<h1 class='paused'>Paused</h1>");
          } else {
            $("div.snake-game-view h1.paused").remove();
            that.run();
          }
        }
      }
    });
  };

  View.prototype.preRender = function () {
    for (var i = 0; i < this.board.grid.length; i++) {
      this.el.append("<ul></ul>");
      for (var j = 0; j < this.board.grid.length; j++) {
        this.el.children().last().append("<li></li>");
      };
    };
  };

  View.prototype.render = function () {
    var that = this;
    $('.snake').removeClass('snake');
    $('.head').removeClass('head');
    var applePos = that.board.apple.pos;
    $($(that.el.children()[applePos[0]]).children()[applePos[1]]).addClass("apple");
    that.board.snake.segments.forEach( function(seg, index) {
      if (index === 0) {
        $($(that.el.children()[seg[0]]).children()[seg[1]]).addClass("head");
      }
      $($(that.el.children()[seg[0]]).children()[seg[1]]).addClass("snake");
    });
  };

  View.prototype.run = function () {
    var that = this;
    this.paused = false;
    this.intID = window.setInterval(function () {
      that.board.snake.move(that.board.apple);
      that.render();
      if (that.board.lose()) {
        window.clearInterval(that.intID);
        $("div.snake-game-view").append("<h1 class='restart'>Restart</h1>");
        $("div.snake-game-view h1.restart").one("click", function (event) {
          $("div.snake-game-view h1.restart").remove();
          $("div.snake-game-view ul").remove();
          that.board = new SnakeGame.Board();
          that.preRender();
          that.reSizing();

          that.run();
        })

      }
    }, 50)
  };

  View.prototype.reSizing = function () {
    if (window.innerHeight < window.innerWidth) {
      var limiting = window.innerHeight * 0.7 - 50;
    } else {
      var limiting = window.innerWidth * 0.7 - 50;
    }

    var boxLength = this.boxLength = Math.floor(limiting/30)
    $("div.snake-game li").css("height", boxLength - 2).css("width", boxLength - 2)
    $("div.snake-game section").css("height", boxLength * 30).css("width", boxLength * 30).css("margin", boxLength + "px auto")
    $("div.snake-game div.snake-game-view").css("height", boxLength * 30).css("width", boxLength * 30)
  };



})();
