function lessThanFive(array) {
    return array.filter((index) => {
        return index < 5;
    });
}

module.exports = lessThanFive;