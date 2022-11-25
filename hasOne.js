function hasOne(array) {
    for(let index = 0; index< array.length; index++) {
        if (array[index] === 1) {
            return true;
        }
    }   return false;
}

module.exports = hasOne;