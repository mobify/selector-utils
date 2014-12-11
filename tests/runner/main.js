
require(['config'], function() {
    require([
        'require',
        'chai',
        'mocha'
    ],
        function(require, chai, mocha) {

            var tests = [
                '../../tests/unit/utils/capitalizeTests.js',
                '../../tests/unit/utils/anyTests.js',
                '../../tests/unit/utils/formatTests.js',
                '../../tests/unit/selector/removeStyleTests.js',
                '../../tests/unit/selector/removeEmptyTests.js',
                '../../tests/unit/selector/swapTests.js',
                '../../tests/unit/selector/getSelectedOptionTests.js',
                '../../tests/unit/selector/outerHeightTests.js',
                '../../tests/unit/selector/traversalsTests.js'
            ];

            require(tests, function() {
                assert = chai.assert;

                if (window.mochaPhantomJS) {
                    return window.mochaPhantomJS.run();
                }
                mocha.run();
            });
        });
});
