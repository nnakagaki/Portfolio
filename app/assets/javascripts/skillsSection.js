Portfolio.SkillsSection = {
  initialize: function() {
    $(".skills ul").css("width", Math.floor(($(".skills h1").width())/120) * 120);
    $(window).on("resize", function (event) {
      $(".skills ul").css("width", Math.floor(($(".skills h1").width())/120) * 120);
    });

    $("main .skills ul li").on("click", function (event) {
      $('html, body').animate({
        scrollTop: $($("main div.skills").last()).offset().top + 100
      }, 300);

      $("main .skills ul li").removeClass("selected");
      $(event.currentTarget).addClass("selected");
      if ($("main .skills .info.active").length > 0) {
        $("main .skills .info").removeClass("active");
        setTimeout(function() {
          $("main .skills .info").addClass("active");
          $("main .skills .info").html("<h2>"+event.currentTarget.classList[0]+"</h2><img src="+$(event.currentTarget).find("img")[0].src+"><div class='clear'></div>")
        }, 500);
      } else {
        $("main .skills .info").addClass("active");
        $("main .skills .info").html("<h2>"+event.currentTarget.classList[0]+"</h2><img src="+$(event.currentTarget).find("img")[0].src+"><div class='clear'></div>")
      }
    });
  }
};
