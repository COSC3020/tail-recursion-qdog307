// Import the tail-recursive Fibonacci function
const { fib_tail_recursive } = require('./code');



// Test cases for the Fibonacci function
const testCases = [
    { input: 1, expected: 1 },
    { input: 2, expected: 1 },
    { input: 3, expected: 2 },
    { input: 5, expected: 5 },
    { input: 10, expected: 55 },
    { input: 15, expected: 610 },
];

function runTests() {
    // Loop through each test case
    for (const { input, expected } of testCases) {
        const result = fib_tail_recursive(input); // Call the Fibonacci function
        if (result !== expected) {
            return false; // Return `false` if any test fails
        }
    }
    return true; // Return `true` if all tests pass
}

// Evaluate the test results
const allTestsPassed = runTests();
if (!allTestsPassed) {
    process.exit(1); // Exit with an error code if any test fails
}