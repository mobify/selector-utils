define([
    '$',
    'src/utils/nestedValue'
], function($) {
    describe('Nested Value', function() {
        describe('with a set of supplied properties where one or more property is undefined', function() {
            it('returns undefined if the final supplied property is undefined', function() {
                var test = {
                    'level1': {
                        'level2': 'hello world'
                    }
                };
                var property = $.nestedValue(test, 'level1.level2.level3');

                assert.isTrue(typeof property === 'undefined');
            });

            it('returns undefined if an intermediary supplied property is undefined', function() {
                var test = {
                    'level1': {
                        'level2': {
                            'level3': 'hello world'
                        }
                    }
                };
                var property = $.nestedValue(test, 'level1.woops.level3');

                assert.isTrue(typeof property === 'undefined');
            });

            it('returns undefined if the supplied property list is an empty string', function() {
                var test = {};
                var property = $.nestedValue(test, '');

                assert.isTrue(typeof property === 'undefined');
            });
        });

        describe('with a set of supplied properties that are defined in the object', function() {
            it('returns the value of the final supplied property', function() {
                var test = {
                    'level1': {
                        'level2': {
                            'level3': 'hello world'
                        }
                    }
                };
                var property = $.nestedValue(test, 'level1.level2.level3');

                assert.isTrue(property === 'hello world');
            });
        });
    });
});
