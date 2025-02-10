Here is a comprehensive README file for your npm package, tailored for use with React and Next.js in both JavaScript and TypeScript. This README covers all functions and their usage.

---

# `@vaibhav_masaye/security-package`


A security package providing various utilities for IP detection, device fingerprinting, bot detection, cookie duplication checking, country verification, and VPN detection.

## Installation

To use this package in your project, install it via npm:

```bash
npm install my-security-package1
```

## Usage

### In a React or Next.js Project

#### JavaScript

1. **Import the Functions**

   ```javascript
   import { 
     getSystemIP, 
     getDeviceFingerprint, 
     isBot, 
     checkCookieDuplication, 
     verifyCountry, 
     isUsingVPN,
     getGeoData 
   } from '@vaibhav_masaye/security-package';
   ```

2. **Usage Examples**

   ```javascript
   // Get System IP
   getSystemIP().then(ip => console.log('IP Address:', ip));

   // Get Device Fingerprint
   console.log('Device Fingerprint:', getDeviceFingerprint());

   // Detect Bot
   console.log('Is Bot:', isBot(navigator.userAgent));

   // Check Cookie Duplication
   console.log('Cookie Duplicate:', checkCookieDuplication('cookieName'));

   // Verify Country
   verifyCountry('India').then(isMatch => console.log('Country Match:', isMatch));

   // Detect VPN
   isUsingVPN().then(isVPN => console.log('Is Using VPN:', isVPN));

   // Get Geo Data
   getGeoData().then(data => console.log('Geo Data:', data));
   ```

#### TypeScript

1. **Import the Functions**

   ```typescript
   import { 
     getSystemIP, 
     getDeviceFingerprint, 
     isBot, 
     checkCookieDuplication, 
     verifyCountry, 
     isUsingVPN,
     getGeoData 
   } from '@vaibhav_masaye/security-package';
   ```

2. **Usage Examples**

   ```typescript
   // Get System IP
   getSystemIP().then((ip: string) => console.log('IP Address:', ip));

   // Get Device Fingerprint
   console.log('Device Fingerprint:', getDeviceFingerprint());

   // Detect Bot
   console.log('Is Bot:', isBot(navigator.userAgent));

   // Check Cookie Duplication
   console.log('Cookie Duplicate:', checkCookieDuplication('cookieName'));

   // Verify Country
   verifyCountry('India').then((isMatch: boolean) => console.log('Country Match:', isMatch));

   // Detect VPN
   isUsingVPN().then((isVPN: boolean) => console.log('Is Using VPN:', isVPN));

   // Get Geo Data
   getGeoData().then((data: GeoData) => console.log('Geo Data:', data));
   ```

### Functions

#### `getSystemIP()`

- **Returns**: `Promise<string>` - Resolves to the IP address of the current system.

#### `getDeviceFingerprint()`

- **Returns**: `string` - Returns a unique identifier for the device.

#### `isBot(userAgent: string)`

- **Parameters**: 
  - `userAgent` (string): The user agent string of the browser.
- **Returns**: `boolean` - `true` if the user agent is identified as a bot, otherwise `false`.

#### `checkCookieDuplication(cookieName: string)`

- **Parameters**: 
  - `cookieName` (string): The name of the cookie to check.
- **Returns**: `boolean` - `true` if the cookie is duplicated, otherwise `false`.

#### `verifyCountry(expectedCountry: string)`

- **Parameters**: 
  - `expectedCountry` (string): The name of the country to verify.
- **Returns**: `Promise<boolean>` - Resolves to `true` if the system's country matches the expected country, otherwise `false`.

#### `isUsingVPN()`

- **Returns**: `Promise<boolean>` - Resolves to `true` if a VPN is detected, otherwise `false`.

#### `getGeoData()`

- **Returns**: `Promise<GeoData>` - Resolves to an object containing geographical data based on the system's IP address.

### TypeScript Definitions

Here’s the TypeScript type for `GeoData`:

```typescript
interface GeoData {
  ip: string;
  continent_code: string;
  continent_name: string;
  country_code2: string;
  country_code3: string;
  country_name: string;
  country_name_official: string;
  country_capital: string;
  state_prov: string;
  state_code: string;
  district: string;
  city: string;
  zipcode: string;
  latitude: string;
  longitude: string;
  is_eu: boolean;
  calling_code: string;
  country_tld: string;
  languages: string;
  country_flag: string;
  geoname_id: string;
  isp: string;
  connection_type: string;
  organization: string;
  country_emoji: string;
  asn: string;
  currency: {
    code: string;
    name: string;
    symbol: string;
  };
  time_zone: {
    name: string;
    offset: number;
    offset_with_dst: number;
    current_time: string;
    current_time_unix: number;
    is_dst: boolean;
    dst_savings: number;
  };
}
```

### License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any sections according to your specific needs or add any additional information that might be relevant for your package.