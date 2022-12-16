function map(arr, callback) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = callback(arr[i], i);
    }
    return newArray;
}

module.exports = map;