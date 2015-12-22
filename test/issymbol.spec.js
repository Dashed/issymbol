var core = require('core-js/library');
var chai = require('chai');
var expect = chai.expect;

var NativeSymbol = (function() {
    if (typeof Symbol !== 'function') {
        return;
    }

    var symbol = Symbol('test');

    try {
        String(symbol);
    } catch (e) {
        return;
    }

    if (typeof Symbol.isConcatSpreadable !== 'object') return;
    if (typeof Symbol.iterator !== 'object') return;
    if (typeof Symbol.toPrimitive !== 'object') return;
    if (typeof Symbol.toStringTag !== 'object') return;
    if (typeof Symbol.unscopables !== 'object') return;
    if (typeof Symbol.iterator != 'symbol') return;

    return Symbol;
})();

require('core-js');

describe('issymbol', function() {

    var issymbol;

    beforeEach(function() {
        issymbol = require('../src');
    });

    it('should return true for Symbol polyfills', function() {
        var Symbol = core.Symbol;
        expect(issymbol(Symbol())).to.equal(true);
    });

    // adapted from: https://github.com/medikoo/es6-symbol/blob/a665c611b96c72b177f70d2e5c253e2e0a2f22cc/is-implemented.js
    it('should return true for any native Symbol', function() {

        if(!NativeSymbol) {
            return;
        }

        var symbol = NativeSymbol('');
        expect(issymbol(symbol)).to.equal(true);
    });

    it('should return false for objects', function() {
        expect(issymbol({})).to.equal(false);
        expect(issymbol(Object.create(null))).to.equal(false);
        expect(issymbol([])).to.equal(false);
    });

    it('should return false for nulls', function() {
        expect(issymbol(null)).to.equal(false);
    });

    it('should return false for undefined', function() {
        expect(issymbol(void 0)).to.equal(false);
        expect(issymbol(undefined)).to.equal(false);
    });

    it('should return false for booleans', function() {
        expect(issymbol(true)).to.equal(false);
        expect(issymbol(false)).to.equal(false);
    });

    it('should return false for primitives', function() {
        expect(issymbol(42)).to.equal(false);
        expect(issymbol(NaN)).to.equal(false);
        expect(issymbol(Infinity)).to.equal(false);
        expect(issymbol('42')).to.equal(false);
    });
});
