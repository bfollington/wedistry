// Import chai.
let chai = require('chai'),
    path = require('path');

import createDestination from "../../app/data/destination";
import {default as createTransport, isTransport} from "../../app/data/transport";

// Tell chai that we'll be using the "should" style assertions.
let expect = chai.expect;

describe('Transport', () => {
  describe('creation and validation', () => {

    beforeEach(() => {

    });

    it('creates a transport', () => {

        var a = createDestination(5, 5);
        var b = createDestination(10, 10);

        var transport = createTransport(a, b);

        expect( isTransport(transport) ).to.be.true;
        expect( transport.from ).to.equal(a);
        expect( transport.to ).to.equal(b);
    });

  });
});
