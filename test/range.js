import {range} from 'lodash';

// Import chai.
let chai = require('chai'),
    path = require('path');

// Tell chai that we'll be using the "should" style assertions.
let expect = chai.expect;

describe('range', () => {

    it('has a 0 lower bound', () => {
        var r = range(3);

        expect(r[0]).to.equal(0);
    });

});
