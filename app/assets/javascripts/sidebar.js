Portfolio.sidebar = {
  initialize: function() {
    var _this = this;

    $(".side-bar li").on("click", function (event) {
      $('html, body').animate({
        scrollTop : $($("main ."+event.target.className).last()).offset().top
      }, 300);
    });

    this._scrollAllFunc();
    $(window).on("scroll", function(event) {
      _this._scrollAllFunc();
    });

    $("div.side-bar ul.links li a").on("mouseenter", function (event) {
      $(event.currentTarget).addClass("hover-animation");
      var intLength   = 2000,
          intLength2  = 500,
          timeoutFunc = function () {
            heartbeat = setTimeout(function () {
              intLength  = intLength * 0.9;
              intLength2 = intLength2 * 0.9;
              $(event.currentTarget).addClass("add-contrast");

              heartbeat2 = setTimeout(function () {
                $(event.currentTarget).removeClass("add-contrast");
              }, intLength2);

              timeoutFunc();
            }, intLength);
          };

      timeoutFunc();
    });

    $(".side-bar ul.links li a").on("mouseleave", function (event) {
      $(event.currentTarget).removeClass("hover-animation");
      $(event.currentTarget).removeClass("add-contrast");
      clearInterval(heartbeat);
      clearTimeout(heartbeat2);
    });
  },

  _scrollAllFunc: function () {
    this._scrollFunc("intro");
    this._scrollFunc("projects");
    this._scrollFunc("skills");
    this._scrollFunc("about");
    this._scrollFunc("contact");
  },

  _scrollFunc: function(sectionStr) {
    var section = $("main ."+sectionStr).last(),
        sectionHeight,
        sectionColor;

    if (section.offset().top <= $(window).scrollTop()) {
       sectionHeight = section.offset().top + section.outerHeight() - $(window).scrollTop();
    } else if (section.offset().top + section.outerHeight() > $(window).scrollTop() + window.innerHeight) {
      sectionHeight = $(window).scrollTop() + window.innerHeight - section.offset().top;
    } else {
      sectionHeight = section.outerHeight();
    }

    sectionColor = Math.floor(255 * (1 - sectionHeight/section.outerHeight()));
    $(".side-bar ul li."+sectionStr).css("color", "rgb("+sectionColor+",255,"+sectionColor+")");
  }
};
