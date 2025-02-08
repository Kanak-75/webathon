function isPerfectSquare(num) 
{
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

// Example usage
console.log(isPerfectSquare(25));  
console.log(isPerfectSquare(16));  
console.log(isPerfectSquare(10));  
console.log(isPerfectSquare(44));   