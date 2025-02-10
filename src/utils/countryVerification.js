const axios = require('axios');

async function verifyCountry(expectedCountry) {
    try {
        const response = await axios.get('https://ipapi.co/json/');

        const country = response.data.country_name;

        // Check if expected country exists in the response
        const isMatch = country.toLowerCase() === expectedCountry.toLowerCase();

        return isMatch;
    } catch (error) {
        console.error("Error fetching countries:", error.message);
        return false;
    }
}


module.exports = verifyCountry;
