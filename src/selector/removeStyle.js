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
        }
    });
}));
