function startsWithX(string) {
    for(let index = 0; index < string.length; index++) {
        if(string[index].toLowerCase() !== `x`) {
            return false;
        }
    }   return true;
}

module.exports = startsWithX;