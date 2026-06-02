//1.default function
/*function printmyname(){
    console.log("my name is vignarathan");
}
printmyname();*/

//2.parameter function
/*function getfullname(fname,lname){
    return `my full name is ${fname} ${lname}`

}
let fullname=getfullname("vikki","s");
console.log(fullname);*/


//3.return function
/*function getfullname(fname,lname){
    return `my full name is ${fname} ${lname}`
}
let fullname=getfullname("vigna","rathan");
console.log(fullname);*/


//parameter function without arguments
//output is my full name is undefined undefined
/*function getfullname(fname,lname){
    return `my full name is ${fname} ${lname}`

}
let fullname=getfullname();
console.log(fullname);*/


//default parameter
function getfullname(fname="vignarathan",lname="sivalingam"){
    return `my full name is ${fname} ${lname}`
}
let fullname=getfullname();
console.log(fullname);