let calc=(num1,num2,operator)=>{
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
        return "invalid number or operator";
    }       
}
let answer=calc(7,4,"5");
console.log(answer);