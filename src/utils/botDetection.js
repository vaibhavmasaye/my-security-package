function isBot(userAgent) {
    const botPattern = /bot|crawler|spider|mediapartners|slurp|bingbot|googlebot|yahoo|duckduckbot|baiduspider|yandex|sogou|exabot|facebot|ia_archiver|crawling/i;
    return botPattern.test(userAgent);
}

module.exports = isBot;
