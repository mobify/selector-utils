(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    /**
     * Checks whether a string exists within a list of other strings, preserving case. The
     * list of strings can be supplied as subsequent parameters to $.any. The first parameter
     * is reserved for the string to search for.
     *
     * Example:
     *
     * var someString = 'something';
     *
     * $.any(someString, 'where', 'are', 'you', 'something', '?');
     *
     * result: true
     *
     * @param str
     * @returns {boolean}
     */
    $.any = function(str) {
        if (!str) return false;

        var itemsToSearch = Array.prototype.slice.call(arguments, 1);

        for (var i = 0, l = itemsToSearch.length; i < l; i++) {
            if (itemsToSearch[i] === str) {
                return true;
            }
        }

        return false;
    };
}));
