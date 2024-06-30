const axios = require('axios');

async function getSystemIP() {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
}

module.exports = getSystemIP;
