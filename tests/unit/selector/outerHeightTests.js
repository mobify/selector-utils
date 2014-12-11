define([
    'text!fixtures/outer-height.html',
    '$',
    'src/selector/outerHeight'
], function(fixture, $) {
    describe('outerHeight', function() {
        describe('attributes with invalid input', function() {
            it('returns null when passed empty', function() {
                assert.equal($('').outerHeight(), null);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly returns outer height', function() {
                assert.equal($(fixture).outerHeight(), 22);
            });
        });
    });
});
