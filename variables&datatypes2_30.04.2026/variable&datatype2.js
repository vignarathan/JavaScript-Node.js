// z=33;
// console.log(z);

// let bool=true;
// console.log(bool);
// console.log(typeof bool);

// let x;
// console.log(x);
// console.log(typeof x);

// let y=null;
// console.log(y);
// console.log(typeof y); //object

// let ar=[1,2,3,4,5,6,7,8,9];
// console.log(ar);
// console.log(typeof ar); //object

// let obj={
//     name:"vikki",
//     age:21
// };
// console.log(obj);
// console.log(typeof obj); //object

// let fun=function(){
//     console.log("welcome");
// }
// console.log(fun);
// console.log(typeof fun); //function

// let sym=Symbol("Hello!");
// console.log(sym);
// console.log(typeof sym); //symbol

// let bgi=12666748956486786454878n;
// console.log(bgi);
// console.log(typeof bgi); //bigint

// let fname="vignarathan";
// console.log(fname);
// console.log(typeof fname);

// const PI=3.14;
// console.log(PI);
// console.log(typeof PI);
// //can,'t reassign or redeclare a const 

// let a=10;
// let b=a;
// console.log(a);//10
// console.log(b);//10
// b=20;
// console.log(a);//10
// console.log(b);//20
// a=50;
// console.log(a);//50
// console.log(b);//20
// //primitivie data type so independent change
//primitive--stuck memory--fast--small 

// let a={name:"vikki"};
// let b=a;
// console.log(`a:${a.name}`);//vikki
// console.log(`a:${b.name}`);//vikki
// b.name="vignarathan";
// console.log(`a:${a.name}`);//vignarathan
// console.log(`a:${b.name}`);//vignarathan
// //referenced so same memory address
// //reference--keep memory--slow-large size data

let a=[1,2,3];
let b=a;
console.log(`a:${a}`);//1,2,3
console.log(`a:${b}`);//1,2,3
b.push(7);
console.log(`a:${a}`);//1,2,3,7
console.log(`a:${b}`);//1,2,3,7

