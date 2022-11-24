function startsWithX(string) {
    return (string[string.length - 1].toLowerCase() === `x`);
}

module.exports = startsWithX;