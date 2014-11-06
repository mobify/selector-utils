define([
    '$',
    'src/format'
], function($) {
    describe('Format', function() {
        describe('with no placeholders', function() {
            it('returns empty when passed empty', function() {
                assert.equal($.format(''), '');
            });

            it('returns empty when passed undefined', function() {
                assert.equal($.format(), '');
            });

            it('returns empty when passed null or falsy', function() {
                assert.equal($.format(null), '');
            });
        });

        describe('with placeholders', function() {
            it('returns correctly formatted string when single placeholder exists', function() {
                var formatString = 'Testing replacement with single {0} string';
                var expectedString = 'Testing replacement with single placeholder string';

                assert.equal($.format(formatString, 'placeholder'), expectedString);
            });

            it('returns correctly formatted string when multiple placeholders exist', function() {
                var formatString = 'Testing replacement with multiple {0} {1}';
                var expectedString = 'Testing replacement with multiple placeholder strings';

                assert.equal($.format(formatString, 'placeholder', 'strings'), expectedString);
            });

            it('returns correctly formatted string when multiple placeholders exist in variable order', function() {
                var formatString = 'Testing replacement with multiple {1} {0}';
                var expectedString = 'Testing replacement with multiple placeholder strings';

                assert.equal($.format(formatString, 'strings', 'placeholder'), expectedString);
            });

            it('throws an error when placeholders don\'t begin at 0th index', function() {
                var formatString = 'Testing replacement throws with wrong index {1}';

                assert.throws(function() {
                    $.format(formatString, 'defined');
                });
            });

            it('throws an error when no replacement strings are passed', function() {
                var formatString = 'Testing no replacements passed {0}';

                assert.throws(function() {
                    $.format(formatString);
                });
            });
        });
    });
});
