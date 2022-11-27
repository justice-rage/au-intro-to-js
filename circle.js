const Shape = require('./shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

module.exports = Circle;