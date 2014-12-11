(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        /*
         * Returns the height plus vertical margins and borders for the first
         * element in the selection
         * Note: padding is already calculated by .height()
         */
        outerHeight: function() {
            var $el = $(this);
            var totalHeight = $el.height();
            var props = $el.css(['margin-top', 'margin-bottom', 'border-top', 'border-bottom']);

            for (var prop in props) {
                var propertyValue = parseInt(props[prop]);

                // isNaN check is required for Android 4.1.2
                if (!isNaN(propertyValue)) {
                    totalHeight += propertyValue;
                }
            }

            return totalHeight;
        }
    });
}));
