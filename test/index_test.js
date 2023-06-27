// const assert = require('assert');
const Robot = require('../index.js');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require("sinon");

describe('Robot', () => {
    describe('.greet', () => {
        it('should return hello codey', () => {
            // Setup
            sinon.spy(Robot, 'greet');
            Robot.greet('codey');

            // Exercise + Verify
            expect(Robot.greet.called).to.be.true;
            expect(Robot.greet.calledWith('codey')).to.be.true;
            expect(Robot.greet.returned('Hello codey')).to.be.true;

            // Teardown
            Robot.greet.restore();
        });
    });

    describe('.name', () => {
        it('checking length of .name property', () => {
            expect(Robot.name).to.have.lengthOf(8);
            assert.lengthOf(Robot.name, 8);
        });

        it('checking type of .name property', () => {
            assert.typeOf(Robot.name, 'string', 'name is a string');
        });
    });
});