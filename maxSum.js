function maxSum(num) {
    let sum = 0;
    for (let index = 1; index <= num; index++) {
        sum += index;
    }
    return sum;
}

module.exports = maxSum;