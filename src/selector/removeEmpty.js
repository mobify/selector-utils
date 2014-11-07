(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        removeEmpty: function() {
            return this.each(function() {
                var $el = $(this);

                if ($.trim($el.html().replace('&nbsp;','')).length === 0) {
                    $el.remove();
                } else {
                    return $el;
                }
            });
        }
    });
}));
