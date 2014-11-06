define([
    '$',
    'velocity'
], function($, Velocity) {
    /**
     * Smooth scrolls an element
     * @param $target
     * @param options
     * @returns {*|Zepto|jQuery}
     */
    $.scrollTo = function($target, options) {
        $target = $target || $('body');
        options = options || {};

        Velocity.animate($target, 'scroll', options);

        return $target;
    };

    /**
     *
     * @param options
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