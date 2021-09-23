// ? Task:Capitalise a String


// Solution 1

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

console.log(capitalize("follow for more"));
// Result: Follow for more

// ! Explanation: Javascript doesn't have an inbuilt capitalise function, so we can use the following code for the purpose.