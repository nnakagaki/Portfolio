Portfolio.sidebar = {
  initialize: function() {
    var _this = this;

    this._scrollAllFunc();
    $(window).on("scroll", function(event) {
      _this._scrollAllFunc();
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
