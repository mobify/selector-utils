(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else {
        factory(window.Zepto || window.jQuery);
    }
}(function($) {
    $.extend($.fn, {
        /*
         * Returns the currently selected option element of a select.
         * Note: If the selected value has been changed using .val(),
         * the selected option element won't have a [selected] attribute
         */
        getSelectedOption: function() {
            var $select = $(this);
            return $select.find('option[value="' + $select.val() + '"]');
        }
    });
}));
