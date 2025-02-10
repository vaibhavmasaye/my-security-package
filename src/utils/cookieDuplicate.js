function checkCookieDuplication(cookieName) {
    const cookies = document.cookie.split('; ').map(cookie => cookie.trim());
    // Check if at least one cookie with the specified name exists
    const hasCookie = cookies.some(cookie => {
        const [name] = cookie.split('=');
        return name === cookieName; // Check if the name matches
    });
    return hasCookie; // Return true if cookie is found, else false
}

module.exports = checkCookieDuplication;
