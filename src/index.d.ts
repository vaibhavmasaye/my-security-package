export function getSystemIP(): Promise<string>;
export function getDeviceFingerprint(): Promise<string>;
export function isBot(userAgent: string): boolean;
export function checkCookieDuplication(cookieName: string): boolean;
export function verifyCountry(expectedCountry: string): Promise<boolean>;
export function isUsingVPN(): Promise<boolean>;
