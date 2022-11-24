function topDouble(value, top) {
    let sum = 1
    while ((sum * 2) < top) {
        sum = sum * value;
    }
    return sum;
}

module.exports = topDouble;