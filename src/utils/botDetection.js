function isBot(userAgent) {
    const botPattern = [
        /bot/,
        /crawl/,
        /spider/,
        /mediapartners/,
        /slurp/,
        /bingbot/,
        /googlebot/,
        /yahoo/,
        /duckduckbot/,
        /baiduspider/,
        /yandex/,
        /sogou/,
        /exabot/,
        /facebot/,
        /ia_archiver/,
      ];
    return botPattern.test(userAgent);
}

module.exports = isBot;
