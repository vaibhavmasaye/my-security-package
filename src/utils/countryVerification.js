const axios = require('axios');

async function verifyCountry(expectedCountry) {
    try {
        const response = await axios.get('https://cis.app.miratsapiservices.com/v1/cis/countries');

        if (!Array.isArray(response.data) || response.data.length === 0) {
            console.error("Invalid API response:", response.data);
            return false;
        }

        // Extract country names
        const countryNames = response.data.map(country => country.name);
        console.log("Detected Countries:", countryNames);

        // Check if expected country exists in the response
        const isMatch = countryNames.some(name => name.toLowerCase() === expectedCountry.toLowerCase());

        console.log(`Expected Country: ${expectedCountry}`);
        console.log("Country Match:", isMatch);

        return isMatch;
    } catch (error) {
        console.error("Error fetching countries:", error.message);
        return false;
    }
}

module.exports = verifyCountry;
