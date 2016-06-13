Selector Utils
================

Selector utility functions that can be selectively included in your Adaptive.js builds.

[![NPM](https://nodei.co/npm/selector-utils.png?downloads=true)](https://nodei.co/npm/selector-utils/)
[![Circle CI](https://circleci.com/gh/mobify/selector-utils.png?style=shield&circle-token=8fbb0878d31fb6260af4d0518e61760df7eaa7a2)](https://circleci.com/gh/mobify/selector-utils)

## Requirements

* [jQuery](http://jquery.com/)
* [Velocity.js](http://julian.com/research/velocity/) (For $.scrollTo util)

### Zepto Support

Selector Utils support Zepto up until v1.1.0 but is not actively developed for it. While we don't actively support Zepto for Selector Utils, we welcome any and all issues and PRs to help us make it work.

## Installation

Selector Utils can be installed to your Adaptive.js build using NPM:

```
npm install selector-utils --save
```

## Usage with Require.js

To use with require.js, after installing through NPM you merely have to reference the desired utils in your require config file(s) (**Note**: If your project already has Velocity as an external dependency, and the versions are compatible, it's recommended that you use the one in your project to reduce duplication. Adaptive projects will automatically minify the util src code when building.):

```config.js
{
    'paths': {
        '$': '$',
        'velocity': 'node_modules/velocity-animate/velocity',
        'isChildOf': 'node_modules/selector-utils/src/selector/isChildOf',
        'removeEmpty': 'node_modules/selector-utils/src/selector/removeEmpty',
        'scrollTo': 'node_modules/selector-utils/src/selector/scrollTo',
        'swap': 'node_modules/selector-utils/src/selector/swap',
        'traversals': 'node_modules/selector-utils/src/selector/traversals',
        'unwrapTables': 'node_modules/selector-utils/src/selector/unwrapTables',
        'any': 'node_modules/selector-utils/src/utils/any',
        'capitalize': 'node_modules/selector-utils/src/utils/capitalize',
        'format': 'node_modules/selector-utils/src/utils/format',
        'nestedValue': 'node_modules/selector-utils/src/utils/nestedValue'
    }
}
```

And then require in and use the util as needed:

```
define(
    ['$', 'isChildOf'],
    function($) {
        if ($('.childElement').isChildOf('.parentElement')) {
            // do something
        }
    }
);
```

## Available Utilities

Utilities

- `$.any`
- `$.capitalize`
- `$.format`
- `$.nestedValue`

Selector Extensions

- `$('.element').removeEmpty()`
- `$('.element').removeStyle(andDescendants)`
- `$('.element').swap(tag)`
- `$('.element').isChildOf(selector)`
- `$('.element').prevUntil(selector)`
- `$('.element').nextUntil(selector)`
- `$('.element').prevAll()`
- `$('.element').nextAll()`
- `$('.element').unwrapTables(tag)`

Static Selector Extensions

- `$.scrollTo($element, options)` (Requires Velocity)
