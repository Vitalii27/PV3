jQuery(function($) {
  var $nav = $(".nav > ul");
  var $navItem = $nav.find("> li");
  var $navLink = $navItem.find("> a");
  var openClass = "is-shown";
  var subMenuClass = "menu-item-has-children";

  // add class for item with submenu
  //console.log($navItem);
  $navItem.each(function() {
    //console.log($(this));
    var $subMenu = $(this).children(".sub-menu");
    if ($subMenu.length) {
      $(this).addClass(subMenuClass);
    }
  });

  function open() {
    $(this).parent($navItem).addClass(openClass);
  }

  function close() {
    $navItem.each(function() {
      $(this).removeClass(openClass);
    });
  }
  //
  //$navLink.on("click", function(e) {
  //  // e.stopPropagation();
  //  e.preventDefault();
  //  if ($(this).hasClass(openClass)) {
  //    close();
  //  } else {
  //    close();
  //    open.call(this);
  //  }
  //});

// // hover
//
//   $navItem.hover(
//     function() {
//       $(this).addClass(openClass);
//     },
//     function() {
//       $(this).removeClass(openClass);
//     });

  //$navItem.find("> a").on("click", function (e) {
  //	var media = !window.matchMedia("(max-width: 767px)").matches;
  //	var hasChild = $(this).parents(".swipe-menu_item").hasClass(subMenuClass);
  //	// prevent link default behavior on desktop
  //	if(media && hasChild) {
  //		e.preventDefault();
  //	}
  //});
  //
  //$("body").on('click', function(e) {
  //  if (e.target.className !== "swipe-menu_item") {
  //    close();
  //  }
  //});
  //
  //$nav.on('click', function(e) {
  //  e.stopPropagation();
  //});
  //
  //$(window).resize(function() {
  //  close();
  //});

}); //ready
