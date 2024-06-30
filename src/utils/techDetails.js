// src/utils/techDetails.js

async function getTechDetails() {
  const userAgent = navigator.userAgent;

  const techDetails = {
      os: navigator.platform,
      isIE: userAgent.includes("MSIE") || userAgent.includes("Trident/"),
      isUC: userAgent.includes("UCBrowser"),
      geoIp: {},
      isBot: userAgent.includes("bot"),
      isMac: navigator.platform.toUpperCase().includes("MAC"),
      isBada: userAgent.includes("Bada"),
      isCurl: userAgent.includes("curl"),
      isEdge: userAgent.includes("Edg"),
      isSilk: userAgent.includes("Silk"),
      isiPad: userAgent.includes("iPad"),
      isiPod: userAgent.includes("iPod"),
      source: userAgent,
      browser: "",
      isAmaya: userAgent.includes("Amaya"),
      isFlock: userAgent.includes("Flock"),
      isLinux: navigator.platform.indexOf("Linux") >= 0,
      isOpera: Boolean(window.opr) || userAgent.includes("OPR/"),
      isWinJs: navigator.appName === "WinJs",
      version: "",
      isChrome: Boolean(window.chrome) || userAgent.includes("Chrome/"),
      isMobile: /Mobi/i.test(userAgent),
      isSafari: /^((?!chrome|android).)*safari/i.test(userAgent),
      isTablet: /Tablet/i.test(userAgent),
      isWebkit: userAgent.includes("AppleWebKit"),
      isWechat: userAgent.includes("MicroMessenger"),
      isiPhone: userAgent.includes("iPhone"),
      platform: navigator.platform,
      isAndroid: /android/i.test(userAgent),
      isCaptive: userAgent.includes("CaptiveNetwork"),
      isDesktop: !(/Mobi/i.test(userAgent) || /Android/i.test(userAgent)),
      isFirefox: userAgent.includes("Firefox"),
      isLinux64: userAgent.includes("Linux x86_64"),
      isOmniWeb: userAgent.includes("OmniWeb"),
      isSamsung: userAgent.includes("SamsungBrowser"),
      isSmartTV: userAgent.includes("SmartTV"),
      isWindows: navigator.platform.toUpperCase().includes("WIN"),
      isChromeOS: userAgent.includes("CrOS"),
      isElectron: userAgent.includes("Electron"),
      isEpiphany: userAgent.includes("Epiphany"),
      isFacebook: userAgent.includes("FBAN") || userAgent.includes("FBAV"),
      isAlamoFire: userAgent.includes("AlamoFire"),
      isKonqueror: userAgent.includes("Konqueror"),
      isPhantomJS: userAgent.includes("PhantomJS"),
      isRaspberry: userAgent.includes("RaspberryPi"),
      isSeaMonkey: userAgent.includes("SeaMonkey"),
      isYaBrowser: userAgent.includes("YaBrowser"),
      isBlackberry:
          userAgent.includes("BlackBerry") || userAgent.includes("BB10"),
      isKindleFire: userAgent.includes("KFAPWI"),
      isMobileNative:
          /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
              userAgent
          ),
      isiPhoneNative: /iphone|ipod/i.test(userAgent),
      isAndroidNative: /android/i.test(userAgent),
      isAndroidTablet: /android(?!.*mobile)/i.test(userAgent),
      isAuthoritative: true,
      silkAccelerated: userAgent.includes("Silk-Accelerated"),
  };

  return techDetails;
}

module.exports = getTechDetails;
