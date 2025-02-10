const axios = require('axios');

const GEO_API_URL = `https://echoip.miratsapiservices.com/ip-data`;

async function getGeoData() {
    try {
        const response = await axios.get(GEO_API_URL);
        const data = response.data; // Axios already parses JSON, no need for response.json()

        return {
            geo_data: {
                ip: data.ipv4 || data.ip, // Use `ipv4` if available, fallback to `ip`
                continent_code: "", // Not provided in API response
                continent_name: "", // Not provided in API response
                country_code2: data.country_code2,
                country_code3: data.country_code3,
                country_name: data.country_name, // API returns short country name
                country_name_official: "", // Not available in API response
                country_capital: "", // Not available in API response
                state_prov: "", // Not available in API response
                state_code: "", // Not available in API response
                district: "", // Not available in API response
                city: "", // Not available in API response
                zipcode: "", // Not available in API response
                latitude: "", // Not available in API response
                longitude: "", // Not available in API response
                is_eu: "", // Not available in API response
                calling_code: "", // Not available in API response
                country_tld: "", // Not available in API response
                languages: "", // Not available in API response
                country_flag: "", // Not available in API response
                geoname_id: "", // Not available in API response
                isp: "", // Not available in API response
                connection_type: "", // Not available in API response
                organization: "", // Not available in API response
                country_emoji: "", // Not available in API response
                asn: "", // Not available in API response
                currency: {
                    code: "", // Not available in API response
                    name: "",
                    symbol: "",
                },
                time_zone: {
                    name: data.time_zone?.name || "",
                    offset: "", // Not available in API response
                    offset_with_dst: "", // Not available in API response
                    current_time: "", // Not available in API response
                    current_time_unix: Math.floor(new Date().getTime() / 1000),
                    is_dst: "", // Not available in API response
                    dst_savings: "", // Not available in API response
                },
            }
        };
    } catch (error) {
        throw new Error('Error fetching geo data: ' + error.message);
    }
}

module.exports = getGeoData;
