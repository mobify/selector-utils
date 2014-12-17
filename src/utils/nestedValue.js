(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    /*
     * Checks whether a set of nested properties exist within a given object, preserving case.
     * The list of properties to check is supplied as a string, separated by periods.
     * The first parameter is reserved for the object whose properties are being checked.
     *
     * Returns the value of the final supplied property if it exists, or undefined
     *
     * Example:
     *
     * var someObject = {
     *     'first': {
     *         'second': {
     *              'third': {
     *                  'property': 'hello world'
     *              }
     *          }
     *      }
     * };
     *
     * $.nestedValue(someObject, 'first.second.third.property');
     *
     * result: 'hello world'
     *
     * @param {Object} o
     * @param {String} propertyChain
     * @returns {*}
     */
    $.nestedValue = function(o, propertyChain) {
        var current = o;
        var keys = propertyChain.split('.');

        var i = 0;

        while (i < keys.length) {
            if (!current.hasOwnProperty(keys[i])) {
                return undefined;
            }

            current = current[keys[i++]];
        }

        return current;
    };
}));
