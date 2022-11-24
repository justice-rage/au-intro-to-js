function scream(n) {
    let str = "";
    for (let index = 1; index <= n; index++) {
        str += "a";
    }
    return str;
}

module.exports = scream;