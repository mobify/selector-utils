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
        $target = $target || $('body');
        options = options || {};

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
            /**
             * Ensure that the container is a plain DOM object, as that's what
             * Velocity requires for non-jQuery environments
             */
            options.container && options.container.length && (options.container = $(options.container)[0]);

            return $.scrollTo($(this), options);
        });
    };
});
