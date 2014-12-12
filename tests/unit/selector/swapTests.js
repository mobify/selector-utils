define([
    'text!fixtures/swap.html',
    'text!fixtures/swapWithAttributes.html',
    '$',
    'src/selector/swap'
], function(fixture, fixtureWithAttributes, $) {
    describe('Swap', function() {
        describe('when called with empty selector', function() {
            it('returns empty set', function() {
                assert.equal($('').swap().length, 0);
            });
        });

        describe('when called with selector', function() {
            it('correctly swaps element', function() {
                var $h2 = $(fixture).swap('h2');

                assert.isFalse($h2.is('h1'));
                assert.isTrue($h2.is('h2'));
            });
        });

        describe('when called with selector with attributes', function() {
            it('correctly swaps element keeping attributes and content', function() {
                var $span = $(fixtureWithAttributes).swap('span');

                assert.isTrue($span.is('span'));

                assert.isTrue($span.hasClass('some__class'));
                assert.equal($span.attr('id'), 'someElement');
                assert.isTrue($span[0].hasAttribute('data-test'));
                assert.isTrue(!!$span.attr('data-test'));
                assert.isTrue($span[0].hasAttribute('hidden'));
                assert.equal($.trim($span.text()), 'Some content in here!');
            });
        });
    });
});
