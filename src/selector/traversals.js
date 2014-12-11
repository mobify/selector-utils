(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    function _until($element, method, selector) {
        var $els = $();
        var $el = $element[method]();

        while ($el.length) {
            if (typeof selector === 'undefined' || $el.is(selector)) {
                $els = $els.add($el);
                $el = $el[method]();
            } else {
                break;
            }
        }

        return $els;
    }

    $.extend($.fn, {
        /*
         * Returns all siblings elements preceding the current selection that
         * match selector if it's defined or all of them if it isn't, until an
         * element that does not match selector is met.
         */
        prevUntil: function(selector) {
            return _until(this, 'prev', selector);
        },

        /*
         * Returns all siblings elements following the current selection that
         * match selector if it's defined or all of them if it isn't, until an
         * element that does not match selector is met.
         */
        nextUntil: function(selector) {
            return _until(this, 'next', selector);
        }
    });
}));
