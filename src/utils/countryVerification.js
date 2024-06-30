const axios = require('axios');

async function verifyCountry(expectedCountry) {
    const response = await axios.get('https://ipapi.co/json/');
    const country = response.data.country_name;
    return country.toLowerCase() === expectedCountry.toLowerCase();
}

module.exports = verifyCountry;
