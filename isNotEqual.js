function greater(first, last) {
    if (first > last) {
        return first; 
    } if (first < last) {
        return last;
    }
}

// My Solution
// function greater(first, last) {
//     if (first > last) {
//         return first 
//     } else if (first < last) {
//         return last
//     } else (first === last)
// }

module.exports = greater;