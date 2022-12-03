function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        accumulator[currentValue.type] = accumulator[currentValue.type] || [];
        accumulator[currentValue.type].push(currentValue.food);
        return accumulator;
    }, {});
}

module.exports = group;