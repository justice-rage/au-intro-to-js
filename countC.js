function countC(str) {
    const lowerCaseStr = str.toLowerCase();
    return (lowerCaseStr.split("c").length -1);
}

module.exports = countC;