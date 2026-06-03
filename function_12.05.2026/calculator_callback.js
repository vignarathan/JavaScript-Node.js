// add,substract, multiply, and divide functions are defined as callback functions
//calculate is a higher-order function that takes an operation (callback function) and two numbers as arguments and returns the result of the operation on those numbers.

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0 && a !== 0) {
        return "Infinity";
    }else if (a === 0 && b === 0) {
        return "Undefined";
    }else {
        return a / b;
    }
}

function calculate(operation,num1,num2) {
    return operation(num1, num2);
} 

let result1 = calculate(add, 10, 5); //function call with add function as callback
console.log("Addition: " + result1); //Addition: 15

let result2 = calculate(subtract, 10, 5); //function call with subtract function as callback
console.log("Subtraction: " + result2); //Subtraction: 5

let result3 = calculate(multiply, 10, 5); //function call with multiply function as callback
console.log("Multiplication: " + result3); //Multiplication: 50

let result4 = calculate(divide, 10, 5); //function call with divide function as callback
console.log("Division: " + result4); //Division: 2

let result5 = calculate(divide, 10, 0); //function call with divide function as callback
console.log("Division by zero: " + result5); //Division by zero: Infinity

let result6 = calculate(divide, 0, 0); //function call with divide function as callback
console.log("Division of zero by zero: " + result6); //Division of zero by zero: Undefined

let result7 = calculate((a,b)=>a+b, 20, 30); //function call with anonymous function as callback
console.log("Addition with anonymous function: " + result7); //Addition with anonymous function: 50

let result8 = calculate((a,b)=>a*b, 20, 30); //function call with anonymous function as callback
console.log("Multiplication with anonymous function: " + result8); //Multiplication with anonymous function: 600

let result9 = calculate((a,b)=>a/b, 20, 30); //function call with anonymous function as callback
console.log("Division with anonymous function: " + result9); //Division with anonymous function: 0.6666666666666666

let result10 = calculate((a,b)=>a-b, 20, 30); //function call with anonymous function as callback
console.log("Subtraction with anonymous function: " + result10); //Subtraction with anonymous function: -10