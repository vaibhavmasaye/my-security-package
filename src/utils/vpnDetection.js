const axios = require('axios');

async function isUsingVPN() {
    const apiKey = 'f7nmft4xg2ep79zl';  // Hardcode your API key here
    const ip = await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip);
    const response = await axios.get(`https://vpnapi.io/api/${ip}?key=${apiKey}`);
    return response.data.security.vpn;
}

module.exports = isUsingVPN;
