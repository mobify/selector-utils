define([
    'text!fixtures/swap.html',
    '$',
    'src/selector/swap'
], function(fixture, $) {
    describe('Swap', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').swap().length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly swaps element', function() {
                assert.equal($(fixture).swap('h2').filter('h1').length, 0);
                assert.equal($(fixture).swap('h2').filter('h2').length, 1);
            });
        });
    });
});
