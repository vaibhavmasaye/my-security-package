function isBot(userAgent) {
    const botPattern = /bot|crawler|spider|crawling/i;
    return botPattern.test(userAgent);
}

module.exports = isBot;
