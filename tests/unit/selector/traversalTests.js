define([
    'text!fixtures/list.html',
    '$',
    'src/selector/traversals'
], function(fixture, $) {
    describe('Traversals', function() {
        var $list = $(fixture).filter('.x-links');

        var siblingCount = $list.children().length - 1;

        var $firstLink = $list.children('a').first();
        var $lastLink = $list.children('a').last();

        describe('prevAll', function() {
            it('returns all previous siblings with no parameters', function() {
                assert.equal($lastLink.prevAll().length, siblingCount);
            });

            it('returns all previous siblings matching a selector', function() {
                assert.equal($lastLink.prevAll('.c-link').length, 7);
            });
        });

        describe('nextAll', function() {
            it('returns all next siblings with no parameters', function() {
                assert.equal($firstLink.nextAll().length, siblingCount);
            });

            it('returns all next siblings matching a selector', function() {
                assert.equal($firstLink.nextAll('.c-link').length, 7);
            });
        });

        describe('prevUntil', function() {
            it('returns all previous siblings with no parameters', function() {
                assert.equal($lastLink.prevUntil().length, siblingCount);
            });

            it('returns all previous siblings until the button', function() {
                assert.equal($lastLink.prevUntil('button').length, 7);
            });

            it('returns all previous siblings until the button while filtering', function() {
                assert.equal($lastLink.prevUntil('button', '.c-link').length, 5);
            });

            it('returns all previous siblings while filtering', function() {
                assert.equal($lastLink.prevUntil(false, '.c-link').length, 7);
            });
        });

        describe('nextUntil', function() {
            it('returns all next siblings with no parameters', function() {
                assert.equal($firstLink.nextUntil().length, siblingCount);
            });

            it('returns all next siblings with until the button', function() {
                assert.equal($firstLink.nextUntil('button').length, 2);
            });

            it('returns all next siblings until the button while filtering', function() {
                assert.equal($firstLink.nextUntil('button', '.c-link').length, 1);
            });

            it('returns all next siblings while filtering', function() {
                assert.equal($firstLink.nextUntil(false, '.c-link').length, 7);
            });
        });
    });
});
