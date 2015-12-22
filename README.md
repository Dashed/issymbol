# issymbol [![Build Status](https://travis-ci.org/Dashed/issymbol.svg)](https://travis-ci.org/Dashed/issymbol)

> `issymbol` tests if something is a Symbol. Works with either native Symbol or polyfill Symbol.

## Usage

```
npm install --save issymbol
```

```js
const issymbol = require('issymbol');

// works with any native Symbol implementation
issymbol(Symbol());
// → true

// also works with your favourite polyfill
const core = require('core-js/library');
issymbol(core.Symbol());
// → true

// returns false any input that is not a Symbol
issymbol('not a symbol');
// → false
```

## Credit

Code for `issymbol` originated from https://github.com/medikoo/es6-symbol/.

## License

MIT
