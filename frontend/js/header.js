jQuery(function ($) {
	var $header = $(".js-fix-header");
	var headerHeight = document.querySelector('.header').offsetHeight * 2;
	var activeClass = 'is-fixed';

	function isOnTop() {
		var vScroll = $(window).scrollTop();
		//var topEdge = 200;
		if (headerHeight >= vScroll) {
			return true;
		} else {
			return false;
		}
	}

	function isMobileMedia() {
		var media = window.matchMedia("only screen and (max-width: 62em)").matches;
		return media;
	}

	function setPosition() {
		if (isOnTop()) {
			// top position;
			$header.removeClass(activeClass);
		} else {
			// fixed position
			$header.addClass(activeClass);

		}
	}

	// init
	if ($header.length) {
		setPosition();
		$(window).on("scroll", setPosition);
		$(window).on("resize", setPosition);
	}

}); // ready