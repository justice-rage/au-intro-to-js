// function sortUp(array) {
//     array.sort((a,b) => a-b);
// }

function sortUp(array) {
    array.sort(function comparison(a,b) {
        return a - b;
    })
}

module.exports = sortUp;