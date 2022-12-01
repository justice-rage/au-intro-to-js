function shortStrings(array) {
    return array.filter((index) => {
        return index.length <= 3
    });
}

module.exports = shortStrings;