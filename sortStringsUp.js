// function sortStringsUp(array) {
//     array.sort((a, b) => a.localeCompare(b));
// }

function sortStringsUp(array) {
    array.sort(function comparison(a, b) {
        return a.localeCompare(b);
    })
}

module.exports = sortStringsUp;