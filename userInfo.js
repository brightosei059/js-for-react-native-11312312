// userInfo.js
let userIdCounter = 1;

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: userIdCounter++,
    }));
}

// Example usage:
const originalNames = ["Bright", "Fred", "Ama", "Jude", "Sama"];
const userProfiles = createUserProfiles(originalNames, formattedStrings);
console.log(userProfiles);
// [
//   { originalName: "Bright", modifiedName: "APPLE", id: 1 },
//   { originalName: "Fred", modifiedName: "banana", id: 2 },
//   { originalName: "Ama", modifiedName: "CHERRY", id: 3 },
//   { originalName: "Jude", modifiedName: "grape", id: 4 },
//   { originalName: "Sama", modifiedName: "orange", id: 5 }
// ]
