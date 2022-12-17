const __calls = [];
const __response = { recieved: true };

function sendResults(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        resolve(__response);
    });
}

module.exports = {
    __calls,
    __response,
    sendResults,
};