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
	}
};