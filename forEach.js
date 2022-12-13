function(arr, callback) {
    let i = -1;
    while (++i < arr.length) {
        callback(arr[i], i);
    }
}

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

module.exports = forEach;