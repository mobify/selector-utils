(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.jQuery);
    }
})(function($) {
    $.extend($.fn, {
        /*
         * Swaps the selected elements with <tag>
         */
        swap: function(tag) {
            var $swapped = $('');
            // Change from .map to .each which builds a $swapped jQuery collection
            this.each(function(i, el) {
                var $el = $(el);
                var $swap = $('<' + tag + '>').html($el.html());
                var attributes = $el.prop('attributes');

                // Copy all attributes
                $.each(attributes, function() {
                    $swap.attr(this.name, this.value);
                });

                // Detatched elements can't be replaced
                // Note: replaceWith() has issues with returning right context
                if ($el.parent().length) {
                    $el.replaceWith($swap);
                }

                $swapped = $swapped.add($swap);
            });
            return $swapped;
        }
    });
});
