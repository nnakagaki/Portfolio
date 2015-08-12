Portfolio.utils = {
	autoPlayVideo: function(jQueryVideo) {
		jQueryVideo.on("mouseenter", function (event) {
	    if (event.currentTarget.readyState === 4) {
	      event.currentTarget.play();
	    }
	  });

	  jQueryVideo.on("mouseleave", function (event) {
	    if (event.currentTarget.readyState === 4) {
	      event.currentTarget.pause();
	      event.currentTarget.currentTime = 0;
	    }
	  });
	},

	isSafari: function() {
		return (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1);
	},

	toggleFullScreen: function(el) {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
};