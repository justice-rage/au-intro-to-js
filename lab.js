const __calls = [];
const __results = { negative: true };
const __reset = () => { __calls.length = 0; }
const __error = new Error("Results are not ready");

function getResults(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        if (args[0] === 1) {
            resolve(__results);
        }
        else {
            reject(__error);
        }
    });
}

module.exports = {
    __calls,
    __reset,
    __results,
    __error,
    getResults,
};