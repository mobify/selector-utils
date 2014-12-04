(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        removeEmpty: function() {
            return this.map(function() {
                var $el = $(this);

                if (!$.trim($el.html().replace(/&nbsp;|&#160|<br\/?>/g,'')).length) {
                    $el.remove();
                } else {
                    return $el;
                }
            });
        }
    });
}));
