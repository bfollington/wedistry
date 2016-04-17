// Import chai.
let chai = require('chai'),
    path = require('path');

import {default as createDestination, isDestination} from "../../app/data/destination";
import {default as createTransport, isTransport} from "../../app/data/transport";

// Tell chai that we'll be using the "should" style assertions.
let expect = chai.expect;

describe('Destination', () => {
  describe('creation and validation', () => {

    beforeEach(() => {

    });

    it('creates a destination', () => {

        var destination = createDestination(5, 10);
        
        expect( isDestination(destination) ).to.be.true;
        expect( destination.lat ).to.equal(5);
        expect( destination.lng ).to.equal(10);
    });

  });
});
