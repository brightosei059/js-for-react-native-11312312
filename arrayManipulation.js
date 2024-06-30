// arrayManipulation.js

function processArray(inputArray) {
    const resultArray = inputArray.map((number) => {
        if (number % 2 === 0) {
            // Square even numbers
            return number ** 2;
        } else {
            // Triple odd numbers
            return number * 3;
        }
    });
    return resultArray;
}

// Example usage:
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
