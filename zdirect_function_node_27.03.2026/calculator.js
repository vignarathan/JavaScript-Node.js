function calc(num1,num2,operator){
   
    if(operator==="+"){
        return num1+num2;
    }else if(operator==="-"){
        return num1-num2;
    }else if(operator==="/"){
        if(num1===0 && num2===0){
            return "Undefined value";
        }else if(num1!=0 && num2===0){
            return "Infinity";
        }else{
            return num1/num2;
        }
    }else if(operator==="*"){
        return num1*num2;
    }else{
        console.log("invalid number or operator");
    }       
}


let ans=calc(5,5,"+");
console.log(ans);
           



