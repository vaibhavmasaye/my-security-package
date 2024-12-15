const axios = require('axios');

const GEO_API_URL = `https://ipwhois.app/json/`;

async function getGeoData() {
    try {
        const response = await axios.get(GEO_API_URL);
        const data = await response.json();

        return {
            geo_data: {
                ip: data.ip,
                continent_code: data.continent_code,
                continent_name: data.continent_name,
                country_code2: data.country_code,
                country_code3: data.country_code3,
                country_name: data.country,
                country_name_official: data.country, // Free APIs might not provide official names
                country_capital: data.country_capital,
                state_prov: data.region,
                state_code: data.region_code,
                district: "", // Not available in free APIs
                city: data.city,
                zipcode: data.postal,
                latitude: data.latitude,
                longitude: data.longitude,
                is_eu: data.is_eu,
                calling_code: data.calling_code,
                country_tld: data.country_tld,
                languages: data.languages,
                country_flag: data.country_flag,
                geoname_id: data.geoname_id,
                isp: data.isp,
                connection_type: "", // Free APIs might not provide this
                organization: data.org,
                country_emoji: "", // Not all free APIs provide this
                asn: data.asn,
                currency: {
                    code: data.currency,
                    name: "",
                    symbol: "",
                },
                time_zone: {
                    name: data.timezone,
                    offset: "",
                    offset_with_dst: "",
                    current_time: data.timezone_time || "",
                    current_time_unix: Math.floor(new Date().getTime() / 1000),
                    is_dst: "",
                    dst_savings: "",
                },
            }
        };
    } catch (error) {
        throw new Error('Error fetching geo data: ' + error.message);
    }
}

module.exports = getGeoData;
