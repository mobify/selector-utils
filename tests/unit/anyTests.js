define([
    '$',
    'src/any'
], function($) {
    describe('Any', function() {
        describe('with invalid input', function() {
            it('returns false when passed empty', function() {
                assert.isFalse($.any(''));
            });

            it('returns false when passed undefined', function() {
                assert.isFalse($.any());
            });

            it('returns false when passed null or falsy', function() {
                assert.isFalse($.any(null));
            });

            it('returns false when no items to search are passed', function() {
                assert.isFalse($.any('some string'));
            });
        });

        describe('with valid input', function() {
            it('return true when item present', function() {
                var stringToFind = 'steve';

                assert.isTrue($.any(stringToFind, 'hi', 'there', 'steve'));
            });

            it('return false when item is different case', function() {
                var stringToFind = 'steve';

                assert.isFalse($.any(stringToFind, 'hi', 'there', 'Steve'));
            });

            it('return false when item not present', function() {
                var stringToFind = 'steve';

                assert.isFalse($.any(stringToFind, 'hi', 'there', 'george'));
            });
        });
    });
});
