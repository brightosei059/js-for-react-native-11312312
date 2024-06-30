// arrayManipulation.js
function formatArrayStrings(strings, processedArray) {
    return strings.map((str, index) => {
        if (processedArray[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
const inputStrings = ["apple", "Banana", "Cherry", "grape", "Orange"];
const formattedStrings = formatArrayStrings(inputStrings, processedArray);
console.log(formattedStrings); // ["APPLE", "banana", "CHERRY", "grape", "orange"]
