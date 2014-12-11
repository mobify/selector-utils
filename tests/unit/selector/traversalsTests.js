define([
    'text!fixtures/items.html',
    '$',
    'src/selector/traversals'
], function(fixture, $) {
    describe('Prev until', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').prevUntil().length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly returns all previous elements when no selector given', function() {
                assert.equal($(fixture).children().last().prevUntil().length, 6);
            });
            it('correctly returns all previous .is-empty element selector given', function() {
                assert.equal($(fixture).children().last().prevUntil('.is-empty').length, 3);
            });
        });
    });

    describe('Next until', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').nextUntil().length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly returns all next elements when no selector given', function() {
                assert.equal($(fixture).children().first().nextUntil().length, 6);
            });
            it('correctly returns all next .is-empty element selector given', function() {
                assert.equal($(fixture).children().first().nextUntil('.has-text').length, 2);
            });
        });
    });
});
