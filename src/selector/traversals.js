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

    function _until($element, method, selector, filter) {
        var $els = $();
        var $el = $element[method]();

        while ($el.length && !$el.is(selector)) {
            if (typeof filter === 'undefined' || $el.is(filter)) {
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
        },

        /*
         * Returns all sibling elements preceding the current selection that
         * optionally match 'filter' until an element that matches 'selector' is met,
         * not including the element matched by 'selector'.
         *
         * When 'selector' is undefined the return value is identical to 'prevAll'
         * with an undefined 'selector' argument; 'prevAll' is called instead.
         */
        prevUntil: function(selector, filter) {
            if (typeof selector === 'undefined') {
                return _all(this, 'prev');
            }

            return _until(this, 'prev', selector, filter);
        },

        /*
         * Returns all sibling elements following the current selection that
         * optionally match 'filter' until an element that matches 'selector' is met,
         * not including the element matched by 'selector'.
         *
         * When 'selector' is undefined the return value is identical to 'nextAll'
         * with an undefined 'selector' argument; 'nextAll' is called instead.
         */
        nextUntil: function(selector, filter) {
            if (typeof selector === 'undefined') {
                return _all(this, 'next');
            }

            return _until(this, 'next', selector, filter);
        }
    });
}));
