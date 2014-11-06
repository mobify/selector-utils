(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    /**
     * Formats a string using index positional syntax. Takes a variable number of replacements.
     *
     * Example:
     *
     * $.format('This string is using {0} syntax, with {1} replacements', 'positional', 'variable');
     *
     * result: 'This string is using positional syntax, with variable replacements'
     *
     * @param format
     * @returns {*}
     */
    $.format = function (format) {
        if (!format) return '';

        var args = Array.prototype.slice.call(arguments, 1);

        if (!args.length) {
            throw 'No replacement strings were provided. Please provide one or more replacements';
        }

        for (var i = 0, l = args.length; i < l; i++) {
            var re = new RegExp('\\{' + (i) + '\\}', 'gm');

            if (i === 0 && !format.match(re)) {
                throw 'Format placeholders must start at index 0. The supplied string does not contain a {0} placeholder';
            }

            format = format.replace(re, args[i]);
        }

        return format;
    };
}));


