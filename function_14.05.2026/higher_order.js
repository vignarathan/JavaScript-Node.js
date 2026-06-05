// Higher Order Functions in JavaScript
// A higher-order function is a function that takes another function as an argument, or returns a function as a result, or both. Higher-order functions are a powerful feature of JavaScript that allows for more flexible and reusable code.

// Example 1: Using setTimeout as a higher-order function
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000); //setTimeout is a built-in function that executes a function after a specified delay (in milliseconds)

//example 2: getting a function as an argument
function myName(a){
    return a();
}
let y=function(){
    return "vignarathan";
};
let x=myName(y); //function call with function as argument
console.log(x); //vignarathan
console.log(typeof y); //function
console.log(typeof x); //string
console.log(typeof myName); //function

// Example 3: Returning a function from another function
function greeter(greeting) {
    return function(name) {
        console.log(greeting + "  " + name);
    }
}

const greetHello = greeter("Hello");
greetHello("vikki"); // Hello  vikki

console.log(typeof greetHello); // function
console.log(typeof greeter); // function
console.log(typeof greeting); // string