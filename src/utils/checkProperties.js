(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    /**
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
     * $.checkProperties(someObject, 'first.second.third.property');
     *
     * result: 'hello world'
     *
     * @param object
     * @param propertyChain
     * @returns {object} or undefined
     */
    $.checkProperties = function(object, propertyChain) {
        var args = propertyChain.split('.');

        for (var i = 0; i < args.length; i++) {
            if (!object.hasOwnProperty(args[i])) {
                return object[args[i]];
            }
            object = object[args[i]];
        }

        return object;
    };
}));
