 let getMyname=function(name){ //function expression assigned to a variable
    console.log("My name is "+name);
}
getMyname("vikki"); //function call with argument
getMyname("vignarathan"); //function call with argument

//arrow function
let getMyname1=(name)=>{ //arrow function assigned to a variable
    console.log("My name is "+name);
}
getMyname1("rathan"); //function call with argument

//if arrow function has only one parameter, we can omit the parentheses
let getMyname2=name=>{ //arrow function with one parameter, parentheses are optional
    console.log("My name is "+name);
}
getMyname2("sivalingam"); //function call with argument

//if arrow function is default and has only one statement
let getMyname3=()=> console.log("My name is vikki");

//arrow function with return
let fullname=(firstname,lastname)=>{ //arrow function with parameters
    return firstname+" "+lastname; //returns the full name by concatenating first name and last name
}
console.log(fullname("vignarathan","sivalingam")); //function call with arguments, output: vignarathan rathan

let fulln=fullname("vignarathan","sivalingam"); //function call with arguments and storing the returned value in a variable
console.log(fulln); //output: vignarathan sivalingam
 
//if arrow function has only one statement
let fullname1=(firstname,lastname)=> firstname+" "+lastname; //implicit return, no need for curly braces or return keyword
console.log(fullname1("vignarathan","sivalingam")); //function call with arguments, output: vignarathan sivalingam

 let sum=(a,b)=> a+b; //arrow function to calculate sum of two numbers
    console.log(sum(5,10)); //output: 15

let getMarks=(...marks)=>{ //arrow function with rest parameters to handle variable number of arguments
    let total = 0;
    for(let mark of marks){
        total += mark;
    }
    return total;
}
console.log(getMarks(85,90,78,92)); //output: 345

//iife with arrow function
((name)=>{
    console.log("My name is "+name);
})("vikki"); //iife call with argument, output: My name is vikki