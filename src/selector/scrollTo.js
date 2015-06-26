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

        if (options.container) {
            var $container = $(options.container).first();
            var container = $container[0];

            // Ensure that the container is a plain DOM object, as that's what
            // Velocity requires for non-jQuery environments
            options.container = container;

            if ($container.css('position') === 'static') {
                $container.css('position', 'relative');

                console.warn('$.scrollTo: the given container must not use position:static, so we made it position:relative');
                // From Velocity's doc:
                // "The container element must have its CSS position property 
                // set to either relative, absolute, or fixed — static will not work"
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
