define([
    'text!fixtures/items.html',
    '$',
    'src/selector/unwrapTables'
], function(fixture, $) {
    describe('Unwrap tables', function() {
        describe('attributes with invalid input', function() {
            it('returns empty when passed empty', function() {
                assert.equal($('').unwrapTables().length, 0);
            });
        });

        describe('attributes with valid input', function() {
            it('correctly unwraps tables content', function() {
                assert.equal($(fixture).unwrapTables().filter('table').length, 0);
            });
        });
    });
});
