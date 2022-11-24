function scream(n) {
    let str = "";
    for (let index = 1; index <= n; index++) {
        const remainder = index % 2;
        const isEven = remainder === 0;
        if(isEven) {
            str += "A";
        } else {
            str += "a";
        }
    }
    return str;
}

module.exports = scream;