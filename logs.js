const __calls = [];
const __errors = [];

function logResponse(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function logError(...args) {
    __errors.push(args);
}

module.exports = {
    __calls,
    __errors,
    logResponse,
    logError,
};