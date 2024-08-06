const axios = require('axios');

const API_KEY = '5f5886809c854f3fae3312db6a01c6e0';
const GEO_API_URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`;

async function getGeoData() {
    try {
        const response = await axios.get(GEO_API_URL);
        const data = response.data;

        return {
            geo_data: {
                ip: data.ip,
                continent_code: data.continent_code,
                continent_name: data.continent_name,
                country_code2: data.country_code2,
                country_code3: data.country_code3,
                country_name: data.country_name,
                country_name_official: data.country_name_official,
                country_capital: data.country_capital,
                state_prov: data.state_prov,
                state_code: data.state_code,
                district: data.district,
                city: data.city,
                zipcode: data.zipcode,
                latitude: data.latitude,
                longitude: data.longitude,
                is_eu: data.is_eu,
                calling_code: data.calling_code,
                country_tld: data.country_tld,
                languages: data.languages,
                country_flag: data.country_flag,
                geoname_id: data.geoname_id,
                isp: data.isp,
                connection_type: data.connection_type,
                organization: data.organization,
                country_emoji: data.country_emoji,
                asn: data.asn,
                currency: {
                    code: data.currency.code,
                    name: data.currency.name,
                    symbol: data.currency.symbol,
                },
                time_zone: {
                    name: data.time_zone.name,
                    offset: data.time_zone.offset,
                    offset_with_dst: data.time_zone.offset_with_dst,
                    current_time: data.time_zone.current_time,
                    current_time_unix: data.time_zone.current_time_unix,
                    is_dst: data.time_zone.is_dst,
                    dst_savings: data.time_zone.dst_savings,
                },
            }
        };
    } catch (error) {
        throw new Error('Error fetching geo data: ' + error.message);
    }
}

module.exports = getGeoData;
