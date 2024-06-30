const axios = require('axios');

async function isUsingVPN() {
    try {
        const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
        const ip = await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip);
        const response = await axios.get(`https://vpnapi.io/api/${ip}?key=${apiKey}`);
        return response.data.security.vpn;
    } catch (error) {
        console.error("Error detecting VPN:", error.response ? error.response.data : error.message);
        return false;  // Assume false if there is an error
    }
}

module.exports = isUsingVPN;
