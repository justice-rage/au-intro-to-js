function halfValue(numbers) {
    const newArray = [];

    for(let index = 0; index < numbers.length; index++) {
        newArray[index] = Math.round(numbers[index] / 2);
    }
    return newArray;
}

module.exports = halfValue;