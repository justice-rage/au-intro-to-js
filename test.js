const { finishFood } = require('../Kitchen');
const Order = require('../Order');
const { assert } = require('chai');

describe('new order', () => {
    const order = new Order();

    it('should not initially be ready', () => {
        assert.equal(order.isReady, false);
    });

    describe('after calling request', () => {
        const request = { id: 1, burgers: 1 };
        before(() => {
            order.request(request);
        });

        it('should still not be ready', () => {
            assert.equal(order.isReady, false);
        });

        describe('after food is done', () => {
            before(() => {
                finishFood(request);
            });

            it('should still be ready', () => {
                assert.equal(order.isReady, true);
            });
        });
    });
});
