(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        /*
         * Removes inline styles for selected element or for all descedants as
         * well if specified
         */
        removeStyle: function(andDescendants) {
            return this.each(function() {
                var $el = $(this);

                $el.removeAttr('style');
                andDescendants && $el.find('[style]').removeAttr('style');

                return $el;
            });
        }
    });
}));
