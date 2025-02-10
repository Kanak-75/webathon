function isPalindrome(num) 
{
    let originalNum = num.toString();
    let reversedNum = originalNum.split('').reverse().join(''); //splits the number,reverse the array of number and the joins the reverse number.
    
    if (originalNum === reversedNum) {
        console.log(`${num} is a palindrome.`);
    } else {
        console.log(`${num} is not a palindrome.`);
    }
}

// Example usage
isPalindrome(121);  // Output: 121 is a palindrome.
isPalindrome(123);  // Output: 123 is not a palindrome.
isPalindrome(1221); // Output: 1221 is a palindrome.
isPalindrome(10);   // Output: 10 is not a palindrome.
