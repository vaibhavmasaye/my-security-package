console.log("Starting test for verifyCountry...");

const verifyCountry = require('./src/utils/countryVerification'); // Ensure this path is correct

async function testVerifyCountry() {
    try {
        console.log("Calling verifyCountry...");
        const expectedCountry = 'United States'; // Change as needed
        const isVerified = await verifyCountry(expectedCountry);
        console.log(`Expected Country: ${expectedCountry}`);
        console.log(`Verification Result: ${isVerified ? 'Match' : 'No Match'}`);
    } catch (error) {
        console.error('Error verifying country:', error);
    }
}

testVerifyCountry();
