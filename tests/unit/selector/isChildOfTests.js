define([
    'text!fixtures/swapWithChildren.html',
    '$',
    'src/selector/isChildOf'
], function(fixture, $) {

    var $parent = $(fixture).find('ul');
    var $child = $parent.find('li');

    describe('Is child of', function() {
        describe('with invalid input', function() {
            it('returns falsy when called by empty selector', function() {
                assert.notOk($('').isChildOf('ul'));
            });
            it('returns falsy when passed in an empty selector', function() {
                assert.notOk($parent.isChildOf(''));
            });
        });

        describe('when element is not a child', function() {
            it('returns falsy', function() {
                assert.notOk($parent.isChildOf('ul'));
            });
        });

        describe('when element is a child', function() {
            it('returns truthy', function() {
                assert.ok($child.isChildOf('ul'));
            });
        });
    });
});
