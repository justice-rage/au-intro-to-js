function shortestString(str1, str2) {
    const str1Length = str1.length;
    const str2Length = str2.length;

    return (str1Length < str2Length? str1 : str2);
}

module.exports = shortestString;