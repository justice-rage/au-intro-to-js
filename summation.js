function summation(n) {
    let sum = 0;

    for (let index = 1; index <= n; index++) {
        sum = sum + index
    }

    return sum;
}

module.exports = summation;