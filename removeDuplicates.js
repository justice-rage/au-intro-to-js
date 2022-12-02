function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        if(accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

module.exports = removeDuplicates;