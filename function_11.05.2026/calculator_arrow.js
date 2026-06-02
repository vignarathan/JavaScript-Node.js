let calculate=(a,b,operation)=>{ //arrow function with parameters
    if(operation==="add"){
        return a+b; //returns the sum of a and b
    }else if(operation==="subtract"){
        return a-b; //returns the difference of a and b
    }else if(operation==="multiply"){
        return a*b; //returns the product of a and b
    }else if(operation==="divide"){
        return a/b; //returns the quotient of a and b
    }else{
        return "Invalid operation"; //returns an error message for invalid operation
    }
}

console.log(calculate(10,5,"add"));