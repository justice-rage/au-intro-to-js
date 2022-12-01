function firstThree(array) {
    return array.filter((element, index) => {
        return index < 3;
    });
}

module.exports = firstThree;