# My Security Package

This package provides security utilities for detecting system IP, device fingerprint, bot detection, cookie duplication, country verification, and VPN detection.

## Installation

```bash
npm install my-security-package



### Sample Next.js Application

In the sample Next.js application, the usage remains the same:

```typescript
import { getSystemIP, getDeviceFingerprint, isBot, checkCookieDuplication, verifyCountry, isUsingVPN } from 'my-security-package';

const MyComponent = () => {
    useEffect(() => {
        getSystemIP().then(ip => console.log(ip));
        getDeviceFingerprint().then(fingerprint => console.log(fingerprint));
        console.log(isBot(navigator.userAgent));
        console.log(checkCookieDuplication('myCookie'));
        verifyCountry('India').then(isMatch => console.log(isMatch));
        isUsingVPN().then(isVpn => console.log(isVpn)); // No need to pass API key
    }, []);

    return <div>Check console for security information</div>;
};
export default MyComponent;```


