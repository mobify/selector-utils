(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        /*
         * Unwrap tables and replace container with <tag>
         */
        unwrapTables: function(tag) {
            if (!tag) {
                tag = 'div';
            }

            return this.each(function() {
                var $el = $(this);
                var $tables = $el.find('table').andSelf('table').not('.js-keep');

                $tables.each(function() {
                    var $table = $(this);

                    // Make sure we don't mix nested tables content
                    var $cells = $table
                        .children('thead, tbody, tfoot')
                        .children('tr')
                        .children('th, td')
                        .removeEmpty();

                    // Remove empty cells to avoid extra line breaks due to &nbsp; etc
                    // Resolve dependency on removeEmpty selector util
                    if ($.fn.removeEmpty) {
                        $cells = $cells.removeEmpty();
                    }

                    // Append Cells content after table
                    $cells.contents()
                        .insertAfter($table)
                        .wrapAll('<' + tag + '>');
                }).remove();

            });
        }
    });
}));
