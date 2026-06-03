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