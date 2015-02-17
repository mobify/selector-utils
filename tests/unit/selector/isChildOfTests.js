define([
    'text!fixtures/nestedChildren.html',
    '$',
    'src/selector/isChildOf'
], function(fixture, $) {

    var $fixture = $(fixture);
    var $parent = $fixture.find('.level-1');
    var $child = $fixture.find('.level-4');

    describe('Is child of', function() {
        describe('with invalid input', function() {
            it('returns false when called by empty selector', function() {
                assert.isFalse($('').isChildOf('.level-1'));
            });

            it('returns false when passed in an empty selector', function() {
                assert.isFalse($parent.isChildOf(''));
            });
        });

        describe('with valid input', function() {
            it('returns false when element is not a child', function() {
                assert.isFalse($parent.isChildOf('.no-such-element'));
            });

            it('returns true when element is a child', function() {
                assert.isTrue($child.isChildOf('.level-1'));
            });
        });
    });
});
