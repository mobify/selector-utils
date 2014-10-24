(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.capitalize = function(str, lower) {
        return str ? (lower ? str.toLowerCase() : str).replace(/(?:^|\s)\S/g, function(a) {
            return a.toUpperCase();
        }) : '';
    };
}));
