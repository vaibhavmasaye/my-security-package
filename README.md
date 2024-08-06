Here's a comprehensive `README.md` for implementing your package in React and Next.js projects, covering both JavaScript and TypeScript setups.

---

# My Security Package

## Overview

This package provides a suite of utilities for:

- IP detection
- Device fingerprinting
- Bot detection
- Cookie duplication checking
- Country verification
- VPN detection
- Geolocation data retrieval

## Installation

You can install this package via npm:

```bash
npm install @vaibhav_masaye/security-package
```

or via yarn:

```bash
yarn add @vaibhav_masaye/security-package
```

## Usage

### React & Next.js (JavaScript)

#### Importing and Using the Package

```javascript
import { getSystemIP, getDeviceFingerprint, isBot, checkCookieDuplication, verifyCountry, isUsingVPN, getGeoData } from '@vaibhav_masaye/security-package';

// Example usage in a React component or Next.js page

async function exampleFunction() {
  try {
    const ip = await getSystemIP();
    console.log('IP:', ip);
    
    const fingerprint = getDeviceFingerprint();
    console.log('Device Fingerprint:', fingerprint);
    
    const userAgent = navigator.userAgent;
    const botDetected = isBot(userAgent);
    console.log('Is Bot:', botDetected);
    
    const cookieCheck = checkCookieDuplication('myCookie');
    console.log('Cookie Duplicate:', cookieCheck);
    
    const isCountryValid = await verifyCountry('India');
    console.log('Country Valid:', isCountryValid);
    
    const vpnDetected = await isUsingVPN();
    console.log('Is Using VPN:', vpnDetected);
    
    const geoData = await getGeoData();
    console.log('Geo Data:', geoData);
  } catch (error) {
    console.error('Error:', error);
  }
}

exampleFunction();
```

### React & Next.js (TypeScript)

#### Importing and Using the Package

```typescript
import { getSystemIP, getDeviceFingerprint, isBot, checkCookieDuplication, verifyCountry, isUsingVPN, getGeoData } from '@vaibhav_masaye/security-package';

async function exampleFunction() {
  try {
    const ip: string = await getSystemIP();
    console.log('IP:', ip);
    
    const fingerprint: string = getDeviceFingerprint();
    console.log('Device Fingerprint:', fingerprint);
    
    const userAgent: string = navigator.userAgent;
    const botDetected: boolean = isBot(userAgent);
    console.log('Is Bot:', botDetected);
    
    const cookieCheck: boolean = checkCookieDuplication('myCookie');
    console.log('Cookie Duplicate:', cookieCheck);
    
    const isCountryValid: boolean = await verifyCountry('India');
    console.log('Country Valid:', isCountryValid);
    
    const vpnDetected: boolean = await isUsingVPN();
    console.log('Is Using VPN:', vpnDetected);
    
    const geoData = await getGeoData();
    console.log('Geo Data:', geoData);
  } catch (error) {
    console.error('Error:', error);
  }
}

exampleFunction();
```

## API Reference

### `getSystemIP()`

Returns a promise that resolves to the system's public IP address.

**Returns:** `Promise<string>`

### `getDeviceFingerprint()`

Returns a string representing the device fingerprint.

**Returns:** `string`

### `isBot(userAgent: string)`

Detects whether the provided user agent string belongs to a bot.

**Parameters:**
- `userAgent` (string): The user agent string to check.

**Returns:** `boolean`

### `checkCookieDuplication(cookieName: string)`

Checks whether the specified cookie has duplicates.

**Parameters:**
- `cookieName` (string): The name of the cookie to check.

**Returns:** `boolean`

### `verifyCountry(expectedCountry: string)`

Verifies if the system's country matches the expected country.

**Parameters:**
- `expectedCountry` (string): The name of the country to verify.

**Returns:** `Promise<boolean>`

### `isUsingVPN()`

Checks if the system is using a VPN.

**Returns:** `Promise<boolean>`

### `getGeoData()`

Retrieves geolocation data for the system's IP address.

**Returns:** `Promise<{ geo_data: GeoData }>` where `GeoData` includes:

- `ip`: The IP address.
- `continent_code`: Continent code.
- `continent_name`: Continent name.
- `country_code2`: Two-letter country code.
- `country_code3`: Three-letter country code.
- `country_name`: Country name.
- `country_name_official`: Official country name.
- `country_capital`: Capital city.
- `state_prov`: State or province.
- `state_code`: State or province code.
- `district`: District.
- `city`: City.
- `zipcode`: Zip code.
- `latitude`: Latitude.
- `longitude`: Longitude.
- `is_eu`: Whether the country is in the EU.
- `calling_code`: Calling code.
- `country_tld`: Country top-level domain.
- `languages`: Languages spoken.
- `country_flag`: URL to the country flag image.
- `geoname_id`: GeoNames ID.
- `isp`: Internet Service Provider.
- `connection_type`: Connection type.
- `organization`: Organization name.
- `country_emoji`: Country emoji.
- `asn`: Autonomous System Number.
- `currency`: Currency details.
- `time_zone`: Time zone details.

## Notes

- Ensure you have the necessary API keys and environment variables set up for the VPN and Geo IP services.
- For TypeScript users, the package includes type definitions to assist with development.

## License

MIT License. See the [LICENSE](./LICENSE) file for details.

---

Feel free to modify this README as needed to match your specific implementation and requirements.
