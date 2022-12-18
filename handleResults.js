const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId, results);
        // return logResponse(response);
        await logResponse(response);
    }
    catch(error) {
        logError(error);
    }
}

module.exports = handleResults;