(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    function _all($element, method, until, filter) {
        var $els = $();
        var $current = $element;

        until = until || [];
        filter = filter || '';

        do {
            $current = $current[method]().not(until);
            $els = $els.add($current);
        } while ($current.length);

        return $els.filter(filter);
    }

    $.extend($.fn, {
        /*
         * Returns all sibling elements preceding the current selection that
         * match 'filter' if it's defined or all of them if it isn't.
         */
        prevAll: function(filter) {
            return _all(this, 'prev', false, filter);
        },

        /*
         * Returns all sibling elements following the current selection that
         * match 'filter' if it's defined or all of them if it isn't.
         */
        nextAll: function(filter) {
            return _all(this, 'next', false, filter);
        },

        /*
         * Returns all sibling elements preceding the current selection that
         * match 'filter' if it's defined or all of them if it isn't, until an
         * element that matches 'until' is met, not including the element matched
         * by 'until'.
         *
         * When 'until' is undefined the return value is identical to 'prevAll'
         * with an undefined 'filter' argument.
         */
        prevUntil: function(until, filter) {
            return _all(this, 'prev', until, filter);
        },

        /*
         * Returns all sibling elements following the current selection that
         * match 'filter' if it's defined or all of them if it isn't, until an
         * element that matches 'until' is met, not including the element matched
         * by 'until'.
         *
         * When 'until' is undefined the return value is identical to 'nextAll'
         * with an undefined 'filter' argument.
         */
        nextUntil: function(until, filter) {
            return _all(this, 'next', until, filter);
        }
    });
}));
