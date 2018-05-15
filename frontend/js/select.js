var Select = (function ($) {

  var _this = $(".js-select");

  // init
  _this.each(function () {
    var _placeholder = $(this).data("placeholder") || "Please select";

    $(this).styler({
      singleSelectzIndex: 2,
      selectPlaceholder: _placeholder,
      // selectVisibleOptions: 5,
      locale: 'en',
      locales: {
        'en': {
          filePlaceholder: 'No file selected',
          fileBrowse: 'Browse...',
          fileNumber: 'Selected files: %s',
          selectPlaceholder: 'Please select',
          selectSearchNotFound: 'No matches found',
          selectSearchPlaceholder: 'Search...'
        }
      },
    });
  })


  return {
    // public methods
    refresh: function () {
      _this.trigger('refresh');
    },
    reset: function (selector) {
      select = selector? $(selector) : _this;
      select.find("option[selected='selected']").each(function () {
        $(this).removeAttr('selected');
      });
      select.find("option:first").attr('selected','selected');
      // refresh select
      setTimeout(function () {
        select.trigger('refresh');
      }, 0);
    }
  }
}(jQuery));

jQuery(function ($) {
  //var select = new Select();
});
