function timer() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
}

module.exports = timer;