function factorial(n) {
    if(n === 1) return 1; 

    return n * factorial(1);
}

module.exports = factorial;