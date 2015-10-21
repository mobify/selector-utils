define([
    '$',
    'velocity'
], function($, Velocity) {
    /**
     * Smooth scrolls an element
     * @param $target - the target element to animate to
     * @param options - includes any valid options Velocity accepts. Please see http://julian.com/research/velocity/#scroll
     * @returns {*|Zepto|jQuery}
     */
    $.scrollTo = function($target, options) {
        var container;
        var position;
        $target = $target || $('body');
        options = options || {};

        // We need a plain DOM element for Velocity.animate when scrolling
        // within a container
        // http://julian.com/research/velocity/#scroll
        container = options.container && $(options.container).get(0);

        if (container) {
            position = window.getComputedStyle(container).position;

            if (!position || position === 'static') {
                throw container + ' needs to have a non-static position property';
            }
        }

        Velocity.animate($target, 'scroll', options);

        return $target;
    };

    /**
     * Smooth scrolls to a selected element
     * @param options - includes any valid options Velocity accepts. Please see http://julian.com/research/velocity/#scroll
     * @returns {*|Zepto|jQuery}
     */
    $.fn.scrollTo = function(options) {
        return this.each(function() {
            return $.scrollTo($(this), options);
        });
    };
});
