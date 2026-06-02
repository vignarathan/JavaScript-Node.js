// getMyName(); //function call //ReferenceError: Cannot access 'getMyName' before initialization
let getMyName=function(){ //function expression
    console.log("my name is vignarathan"); 
}
getMyName(); //function call

getMyName1(); //function call before function declaration //ReferenceError: Cannot access 'getMyName1' before initialization
function getMyName1 (){ 
    console.log("my name is vikki"); 
}
getMyName1(); //function call

console.log(x); //undefined due to variable hoisting
var x=10; //variable declaration and initialization

let getMyName2=function(name){ 
    console.log("my name is "+name);
}
let a=getMyName2("rathan");//function calling with argument and storing the return value in variable a. Since getMyName2 does not return anything, a will be undefined.
console.log(a); //undefined
getMyName2("vignarathan"); 
// a("siv");//TypeError: a is not a function because a is assigned the return value of getMyName2 which is undefined.

let b=getMyName2; //it's not calling it's assigning  //now b is referencing the same function as getMyName2  
b("lingam"); //my name is siv because b is now referencing the same function as getMyName2
// here b is a function
