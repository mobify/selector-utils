require.config({
    baseUrl: '../../',
    paths: {
        'text': 'node_modules/text/text',
        'fixtures': 'tests/fixtures',
        '$': 'lib/zeptojs/dist/zepto',
        'chai': 'node_modules/chai/chai',
        'mocha': 'node_modules/mocha/mocha',
        'velocity': 'node_modules/velocity-animate/velocity'
    },
    'shim': {
        'mocha': {
            init: function() {
                this.mocha.setup('bdd');
                return this.mocha;
            }
        },
        '$': {
            exports: '$'
        }
    }
});
