// A callback function is a function that is passed as an argument to another function
function greet(name, callback) {
        console.log("Hello, " + name); // Executes first
        callback(); // Calls the callback function
    }
    
    // This function will be used as a callback
    function whatsup() {
        console.log("whatsup!"); // Executes after the greet function finishes
    }
    
    // Calling the greet function and passing saywhatsup as a callback
    greet("Kanak", whatsup); 
    
    /* 
    Why are callbacks important?
    1. Callbacks allow functions to be executed after another function completes.
    2. They help in handling asynchronous operations like API calls, file reading, or timers.
    3. They improve modularity by keeping the code clean and structured.
    */
    
    console.log("End"); // Executes before setTimeout callback
    