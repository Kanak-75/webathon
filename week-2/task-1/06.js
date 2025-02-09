// "var" is function-scoped, can be re-declared and updated
var x = 10;  // Declaring a variable using var
console.log(x); // Output: 10

var x = 20;  // Re-declaring the same variable (Allowed)
console.log(x); // Output: 20

// "let" is block-scoped, can be updated but not re-declared in the same scope
let y = 30;  // Declaring a variable using let
console.log(y); // Output: 30

y = 40; // Updating is allowed
console.log(y); // Output: 40

// let y = 50;  // ❌ Error: Cannot redeclare 'y' in the same scope

// "const" is block-scoped, cannot be updated or re-declared
const z = 50;  // Declaring a constant
console.log(z); // Output: 50

// z = 60;  // ❌ Error: Assignment to constant variable
// const z = 70;  // ❌ Error: Cannot redeclare 'z'
