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
            var spacingProperties = [
                'margin-top',
                'margin-bottom',
                'border-top',
                'border-bottom'
            ];

            for (var i = 0, l = spacingProperties.length; i < l; i++) {
                var propertyValue = parseInt($el.css(spacingProperties[i]));

                if (!isNaN(propertyValue)) {
                    totalHeight += propertyValue;
                }
            }

            return totalHeight;
        }
    });
}));
