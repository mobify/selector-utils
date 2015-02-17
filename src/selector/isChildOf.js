(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        isChildOf: function(selector) {
            return selector ? !!$(this).parents(selector).length : false;
        }
    });
}));
