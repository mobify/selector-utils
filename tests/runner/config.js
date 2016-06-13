require.config({
    baseUrl: '../../',
    paths: {
        'text': 'node_modules/text/text',
        'fixtures': 'tests/fixtures',
        '$': 'node_modules/jquery/dist/jquery',
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
