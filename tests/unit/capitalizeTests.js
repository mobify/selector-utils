define([
    '$',
    'src/capitalize'
], function($) {
    describe('Capitalize with invalid input', function() {
        it('returns empty when passed empty', function() {
            assert.equal($.capitalize(''), '');
        });

        it('returns empty when passed undefined', function() {
            assert.equal($.capitalize(), '');
        });

        it('returns empty when passed null or falsy', function() {
            assert.equal($.capitalize(null), '');
        });
    });

    describe('Capitalize with valid input', function() {
        it('correctly capitalizes single words', function() {
            assert.equal($.capitalize('foo'), 'Foo');
        });

        it('correctly capitalizes single words without changing case', function() {
            assert.equal($.capitalize('fOo'), 'FOo');
        });

        it('correctly capitalizes multiple words', function() {
            assert.equal($.capitalize('foo bar'), 'Foo Bar');
        });

        it('correctly capitalizes multiple words without changing case', function() {
            assert.equal($.capitalize('fOo bAr'), 'FOo BAr');
        });

        it('ignores uppercase strings', function() {
            assert.equal($.capitalize('FOO BAR'), 'FOO BAR');
        });
    });
});
