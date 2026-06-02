//default function
function getName() {
    console.log("my name is vignarathan"); //function declaration
}
getName(); //function call


//parameterized function
function getMyName(name) {
    console.log("my name is " + name); //function with parameter
}
getMyName("vikki"); //function call with argument

//return function
function getFullName(firstName, lastName) {
    return firstName + " " + lastName; //function with return statement
}
let fullName = getFullName("vignarathan", "sivalingam"); //function call with arguments and storing the return value in a variable
console.log(fullName);

let fn=getFullName(); //function call without arguments and storing the return value in a variable
console.log(fn); //undefined because we did not pass any arguments to the function and the function is trying to concatenate undefined values

let fn1=getFullName(null,null); //function call with null arguments and storing the return value in a variable
console.log(fn1); //null null because we passed null as arguments to the function and the function is trying to concatenate null values

let fn2=getFullName(undefined,undefined); //function call with undefined arguments and storing the return value in a variable
console.log(fn2); //undefined undefined because we passed undefined as arguments to the function and the function is trying to concatenate undefined values

let fn3=getFullName("",""); //function call with empty string arguments and storing the return value in a variable
console.log(fn3); //  because we passed empty string as arguments to the function and the function is trying to concatenate empty string values


//valiodation old method
function getFullName1(firstName, lastName) {
    if (firstName === undefined ) {
        firstName = "vigna";
    }
    if (lastName === undefined ) {
        lastName = "siva";
    }
    return firstName + " " + lastName;
}
let fullName1 = getFullName1(); //function call without arguments and storing the return value in a variable
console.log(fullName1); //vigna siva because we have assigned default values to the parameters in the function

//default parameters in ES6
function getFullName2(firstName="vigna", lastName="siva") {
    return firstName + " " + lastName;
}
let fullName2 = getFullName2(); //function call without arguments and storing the return value in a variable
console.log(fullName2); //vigna siva because we have assigned default values to the parameters in the function

