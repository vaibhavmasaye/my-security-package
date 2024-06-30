function checkCookieDuplication(cookieName) {
    const cookies = document.cookie.split('; ');
    const cookieCount = cookies.filter(cookie => cookie.startsWith(cookieName + '=')).length;
    return cookieCount > 1;
}

module.exports = checkCookieDuplication;
