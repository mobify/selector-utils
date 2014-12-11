(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        removeStyle: function() {
            return this.each(function() {
                return $(this).removeAttr('style');
            });
        },

        /*
         * Removes inline styles for all descendants and itself if specified
         */
        removeStyles: function(andSelf) {
            return this.each(function() {
                var $el = $(this);

                if (andSelf) {
                    $el.removeStyle();
                }

                $el.find('[style]').removeStyle();

                return $el;
            });
        }
    });
}));
