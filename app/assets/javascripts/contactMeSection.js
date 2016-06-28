Portfolio.ContactMeSection = {
  initialize: function() {
    $("form.contact-me").on("submit", function (event) {
      event.preventDefault();

      var name    = $("form.contact-me input.name").val(),
          email   = $("form.contact-me input.email").val(),
          content = $("form.contact-me textarea").val();

      if (name === "") {
        $(".contact div.message").append("Name cannot be empty! ");
        setTimeout(function () {
          $("div.contact div.message").html("");
        }, 5000)
      }

      if (email === "") {
        $(".contact div.message").append("Email cannot be empty! ");
        setTimeout(function () {
          $(".contact div.message").html("");
        }, 5000)
      }

      if (content === "") {
        $(".contact div.message").append("Content cannot be empty! ");
        setTimeout(function () {
          $(".contact div.message").html("");
        }, 5000)
      }

      if ((name !== "") && (email !== "") && (content !== "")) {
        $.ajax({
          url: "/contact_me",
          type: "GET",
          data: {mail: {name: name, email: email, content: content}},
          success: function (res) {
            $("form.contact-me input.name").val("");
            $("form.contact-me input.email").val("");
            $("form.contact-me textarea").val("");
            $("div.contact div.message").html("Email sent!");
            setTimeout(function () {
              $("div.contact div.message").html("");
            }, 5000)
          }
        });
      }
    });
  }
};
