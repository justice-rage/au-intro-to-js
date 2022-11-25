function unique(array) {
    const newArray = [...new Set(array)];
    return newArray;
}

module.exports = unique;