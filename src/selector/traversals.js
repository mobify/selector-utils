(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    function _all($element, method, selector) {
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
         * Returns all sibling elements preceding the current selection that
         * match selector if it's defined or all of them if it isn't, until an
         * element that does not match selector is met.
         */
        prevAll: function(selector) {
            return _all(this, 'prev', selector);
        },

        /*
         * Returns all sibling elements following the current selection that
         * match selector if it's defined or all of them if it isn't, until an
         * element that does not match selector is met.
         */
        nextAll: function(selector) {
            return _all(this, 'next', selector);
        }
    });
}));
