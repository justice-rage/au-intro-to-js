function unique(array) {
    return array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
}

module.exports = unique;