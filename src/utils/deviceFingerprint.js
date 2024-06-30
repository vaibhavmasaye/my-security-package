const FingerprintJS = require('fingerprintjs2');

async function getDeviceFingerprint() {
    const components = await FingerprintJS.getPromise();
    const values = components.map(component => component.value);
    const fingerprint = FingerprintJS.x64hash128(values.join(''), 31);
    return fingerprint;
}

module.exports = getDeviceFingerprint;
