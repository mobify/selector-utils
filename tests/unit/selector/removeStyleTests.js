define([
    'text!fixtures/items.html',
    '$',
    'src/selector/removeStyle'
], function(fixture, $) {
    describe('Remove style', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').removeStyle().filter('[style]').length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly empties a list with only styled elements', function() {
                assert.equal($(fixture).find('.has-style').removeStyle().filter('[style]').length, 0);
            });
        });
    });

    describe('Remove style with descendants', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').removeStyle(true).filter('[style]').length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly empties a list with only styled elements', function() {
                assert.equal($(fixture).filter('.has-style-container').removeStyle(true).filter('[style]').length, 0);
            });
        });
    });
});
