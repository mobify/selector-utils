(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    /**
     * Capitalizes single or multiple words. By default, it preserves
     * the case of any subsequent letters after the first. This behavior
     * can be overridden using the `lower` parameter.
     * @param str - string to capitalize
     * @param lower - bool to force subsequent letters to lowercase
     * @returns {string}
     */
    $.capitalize = function(str, lower) {
        return str ? (lower ? str.toLowerCase() : str).replace(/(?:^|\s)\S/g, function(a) {
            return a.toUpperCase();
        }) : '';
    };
}));
