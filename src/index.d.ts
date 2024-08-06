// Define the types for the GeoData response
interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface TimeZone {
    name: string;
    offset: number;
    offset_with_dst: number;
    current_time: string;
    current_time_unix: number;
    is_dst: boolean;
    dst_savings: number;
}

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
    currency: Currency;
    time_zone: TimeZone;
}

export function getSystemIP(): Promise<string>;
export function getDeviceFingerprint(): Promise<string>;
export function isBot(userAgent: string): boolean;
export function checkCookieDuplication(cookieName: string): boolean;
export function verifyCountry(expectedCountry: string): Promise<boolean>;
export function isUsingVPN(): Promise<boolean>;
export function getTechDetails(): {
    os: string;
    isIE: boolean;
    isUC: boolean;
    geoIp: {};
    isBot: boolean;
    isMac: boolean;
    isBada: boolean;
    isCurl: boolean;
    isEdge: boolean;
    isSilk: boolean;
    isiPad: boolean;
    isiPod: boolean;
    source: string;
    browser: string;
    isAmaya: boolean;
    isFlock: boolean;
    isLinux: boolean;
    isOpera: boolean;
    isWinJs: boolean;
    version: string;
    isChrome: boolean;
    isMobile: boolean;
    isSafari: boolean;
    isTablet: boolean;
    isWebkit: boolean;
    isWechat: boolean;
    isiPhone: boolean;
    platform: string;
    isAndroid: boolean;
    isCaptive: boolean;
    isDesktop: boolean;
    isFirefox: boolean;
    isLinux64: boolean;
    isOmniWeb: boolean;
    isSamsung: boolean;
    isSmartTV: boolean;
    isWindows: boolean;
    isChromeOS: boolean;
    isElectron: boolean;
    isEpiphany: boolean;
    isFacebook: boolean;
    isAlamoFire: boolean;
    isKonqueror: boolean;
    isPhantomJS: boolean;
    isRaspberry: boolean;
    isSeaMonkey: boolean;
    isYaBrowser: boolean;
    isBlackberry: boolean;
    isKindleFire: boolean;
    isMobileNative: boolean;
    isiPhoneNative: boolean;
    isAndroidNative: boolean;
    isAndroidTablet: boolean;
    isAuthoritative: boolean;
    silkAccelerated: boolean;
};
export function getGeoData(): Promise<{ geo_data: GeoData }>;
