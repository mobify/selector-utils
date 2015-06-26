define([
    'text!fixtures/items.html',
    '$',
    'src/selector/removeEmpty'
], function(fixture, $) {
    describe('Remove empty', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').removeEmpty().length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly empties empty elements', function() {
                assert.equal($(fixture).removeEmpty().filter('.is-empty').length, 0);
            });
        });
    });
});
