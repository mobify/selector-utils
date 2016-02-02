module.exports = function(grunt) {
    var jslint = require('../jslinting');

    return {
        dev: {
            src: jslint.targets,
            options: {
                reset: true,
                config: require.resolve('mobify-code-style/javascript/.eslintrc')
            }
        },
        prod: {
            src: jslint.targets,
            options: {
                reset: true,
                config: require.resolve('mobify-code-style/javascript/.eslintrc-prod')
            }
        }
    };
};
