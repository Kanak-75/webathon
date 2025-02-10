//3.	Find the Largest Number in an Array.

console.log("Find the Largest Number in an Array");

function findLargestNumber(numbers) {
    return Math.max(...numbers);
}

let numArray = [10, 25, 60.55, 5.5, 60.5]; 
console.log(`The largest number is: ${findLargestNumber(numArray)}`);
