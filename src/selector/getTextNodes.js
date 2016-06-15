(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        getTextNodes: function() {
            var $element = $(this);

            if (!$element.length) {
                return;
            }

            return $element.contents().filter(function() {
                return this.nodeType === 3 && /[^\s]+/m.test(this.textContent);
            });
        }
    });
}));
