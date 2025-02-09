// Definition of undefined:
// "undefined" means a variable has been declared but has not been assigned a value.
let a;
console.log(a);  // Output: undefined

// Definition of null:
// "null" is an assigned value that represents the intentional absence of any object value.
let b = null;
console.log(b);  // Output: null

// Checking their types
console.log(typeof a);  // Output: "undefined"
console.log(typeof b);  // Output: "object" (This is a known JavaScript quirk)

// Comparing undefined and null
console.log(a == b);  // Output: true  (Both are loosely equal)
console.log(a === b); // Output: false (Strict comparison: different types)
