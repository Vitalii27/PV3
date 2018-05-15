//Animate CSS + WayPoints javaScript Plugin + device.js
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
(function ($) {
  $.fn.animated = function (inEffect, outEffect) {
    $(this).css("opacity", "0").addClass("animated").waypoint(function (dir) {
      if (dir === "down") {
        $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
      } else {
        $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
      }
    }, {
      offset: $(window).height()
    }).waypoint(function (dir) {
      if (dir === "down") {
        $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
      } else {
        $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
      }
    }, {
      offset: -$(window).height()
    });
  };
})(jQuery);

(function ($) {
  $.fn.animated_once = function (inEffect) {
    $(this).css("opacity", "0").addClass("animated").waypoint(function (dir) {

      $(this).addClass(inEffect).css("opacity", "1");

    }, {
      offset: $(window).height()
    });
  };
})(jQuery);

(function ($) {
  $.fn.waypointTriger = function (cb) {
    $(this).waypoint(function (dir) {
      if (dir === "down") {
        cb($(this));
      }
    }, {
      offset: $(window).height()
    }).waypoint(function (dir) {
      if (dir === "up") {
        cb($(this));
      }
    }, {
      offset: -$(window).height()
    });
  };
})(jQuery);

(function ($) {

  var media = window.matchMedia("only screen and (max-width: 62em)").matches;

  if (!device.mobile() && !media) {
    //$("#services").animated("fadeInUp", "fadeOutDown");
    //$(".js-animation-in").animated_once("fadeIn");
    //$(".js-animation-left").animated_once("fadeInLeft");
    //$("#contact").animated_once("svg");

  }

})(jQuery);