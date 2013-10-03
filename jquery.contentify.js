(function($) {

  $.fn.contentify = function(options) {

    // Initialze settings
    var settings = $.extend({
      headingSelectors: ['h1', 'h2', 'h3', 'h4', 'h5']
    }, options);

    // Initialize table of contents entries
    var toc = [];

    // Find all headings
    $(settings.headingSelectors.join(',')).each(function() {
      for (var i = 0; i < settings.headingSelectors.length; ++i) {
        if ($(this).is(settings.headingSelectors[i]) === true) {
          toc.push({
            title: $(this).html(),
            level: i
          });
        }
      }
    });

    // Generate table of contents HTML
    var tocHTML  = '';

    for (var i = 0; i < toc.length; ++i) {
      if (i === 0 || toc[i - 1].level < toc[i].level) {
        tocHTML += '<ol>';
      }

      tocHTML += '<li><a href="">' + toc[i].title + '</a></li>';

      if (i === toc.length - 1 || toc[i].level > toc[i + 1].level) {
        tocHTML += '</ol>';
      }
    }

    // Insert table of contents HTML
    return this.each(function() {
      $(this).html(tocHTML);
    });
  };

})(jQuery);
