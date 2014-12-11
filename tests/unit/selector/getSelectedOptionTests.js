define([
    'text!fixtures/select.html',
    '$',
    'src/selector/getSelectedOption'
], function(fixture, $) {
    describe('getSelectedOption', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').getSelectedOption().length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly returns selected option', function() {
                var $select = $(fixture);

                $select.val('2');
                assert.equal($select.getSelectedOption().val(), 2);
            });
        });
    });
});
