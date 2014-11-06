define([
    'text!fixtures/items.html',
    '$',
    'src/removeStyle'
], function(fixture, $) {
    describe('Remove style', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').removeStyle().filter('[style]').length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly empties a list with only styled elements', function() {
                assert.equal($(fixture).filter('.has-style').removeStyle().filter('[style]').length, 0);
            });
        });
    });
});
