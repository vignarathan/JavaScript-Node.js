function sum(a, b, c) {   
    return a + b + c;   //this function returns one value
}

let result = sum(4,5,6); //function call with arguments
console.log(result); //15

function calculate(a,b,c){
    console.log("a: "+a+", b: "+b+", c: "+c); //a: 10, b: 5, c: 2
    return [a+b+c, a-b-c, a*b*c, a/b/c, a%b%c]; //this function returns multiple values in the form of an array
}

let answer = calculate(10,5,2);
console.log(answer); //[17, 3, 100, 1, 0]

let [sumResult, diffResult, productResult, divisionResult, modulusResult] = calculate(10,5,2); //array destructuring to assign returned values to variables
console.log("Sum: "+sumResult); //Sum: 17
console.log("Difference: "+diffResult); //Difference: 3
console.log("Product: "+productResult); //Product: 100
console.log("Division: "+divisionResult); //Division: 1
console.log("Modulus: "+modulusResult); //Modulus: 0         

let [s, d, p] = calculate(10,5,2); //another function call with different arguments
console.log("Sum: "+s); //Sum: 17
console.log("Difference: "+d); //Difference: 3
console.log("Product: "+p); //Product: 100       

//normal
let marks=[85, 90, 78, 92, 88];
function getMarks(marks){
    let total = 0;
    for(let mark of marks){
        total += mark;
    }
    return total;
}
let totalMarks = getMarks(marks);
console.log("Total Marks: "+totalMarks); //Total Marks: 433

//with multiple return values
//rest parameters to handle variable number of arguments
function getMarks1(...marks1){
    let total = 0;
    for(let mark of marks1){
        total += mark;
    }
    return total;
}
let totalMarks1 = getMarks1(85, 90, 78, 92, 88,69,78,89);
console.log("Total Marks: "+totalMarks1); //Total Marks: 669

function getMarks2(x,y,...marks2){
    let total = 0;
    for(let mark of marks2){ //here x and y are not included in the marks2 array, they are separate parameters. marks2 will only contain the values passed after x and y.
        total += mark;
    }
    return total;
}
let totalMarks2 = getMarks2(85, 90, 78, 92, 88,69,78,89);
console.log("Total Marks: "+totalMarks2);