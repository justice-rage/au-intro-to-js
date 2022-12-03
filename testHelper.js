const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE) {
            throw new Error("No more room to add items");
        }
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("No more items to remove");
        }
        return this.items.pop();
    }
    isEmpty() {
        return (this.items.length === 0);
    }
    peek() {
        return (this.items[this.items.length - 1]);
    }
}

module.exports = Stack;
