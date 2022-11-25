function countVowels(str) {
    const lowerCaseStr = str.toLowerCase();

    const aNum = (lowerCaseStr.split("a").length -1);
    const eNum = (lowerCaseStr.split("e").length -1);
    const iNum = (lowerCaseStr.split("i").length -1);
    const oNum = (lowerCaseStr.split("o").length -1);
    const uNum = (lowerCaseStr.split("u").length -1);

    const totalVowels = aNum + eNum + iNum + oNum + uNum;

    return totalVowels;
}

module.exports = countVowels;