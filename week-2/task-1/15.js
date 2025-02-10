//15. Write a function that checks if a given number is a perfect square.
function isPerfectSquare(num) 
{
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

// Example use
console.log(isPerfectSquare(25));  
console.log(isPerfectSquare(16));  
console.log(isPerfectSquare(10));  
console.log(isPerfectSquare(44));   