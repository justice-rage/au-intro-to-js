const largest = require('../largest');
const { assert } = require('chai');

describe('largest positive', function () {
    it('should take the largest positive of 1 negative element', () => {
        assert.equal(largest([-3]), 1);
    });

    it('should take the largest positive of 5 non-positive elements', () => {
        assert.equal(largest([-3, -2, -10, -15, 0]), 1);
    });

    it('should take the largest positive of 10 positive and negative elements', () => {
        assert.equal(largest([2, -8, 4, -10, 1, -9, 3, -5, 6, 7]), 7);
    });
});