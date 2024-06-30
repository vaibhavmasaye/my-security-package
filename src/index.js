// index.js

const { getSystemIP } = require('./utils/ipDetection');
const { getDeviceFingerprint } = require('./utils/deviceFingerprint');
const { isBot } = require('./utils/botDetection');
const { checkCookieDuplication } = require('./utils/cookieDuplicate');
const { verifyCountry } = require('./utils/countryVerification');
const { isUsingVPN } = require('./utils/vpnDetection');
const { getTechDetails } = require('./utils/techDetails'); 

module.exports = {
    getSystemIP,
    getDeviceFingerprint,
    isBot,
    checkCookieDuplication,
    verifyCountry,
    isUsingVPN,
    getTechDetails 
};
