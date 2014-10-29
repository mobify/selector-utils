(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.fn.removeStyle = function() {
        return this.filter('[style]').removeAttr('style');
    };
}));
