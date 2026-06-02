let x=10;
let y=20;
let z=x+y;
console.log(`x+y ${z}`);
let a=15;
let b=3;
let c=a-b;
console.log(`a-b ${c}`);
let d=10;
let e=5;
let f=d*e;
console.log(`d*e ${f}`);
let g=10;
let h=2;
let i=g/h;
console.log(`g/h ${i}`);

console.log(`x+y ${z}`);
console.log('x='+x);
console.log("x=",x);

let p,q;
p=10;
q=20;
console.log(`p=${p} and q=${q}`);

let l,m;
l=m=10;
console.log(`l=${l} and m=${m}`);

console.log(r=110); // we can declare and assign a variable in console.log

let n=10;
console.log(n**3); //exponentiation operator

let s=10;
console.log(s%3); //modulus operator gives the remainder

//here "//" operator is not available in javascript but in python it is used for floor division

let na="vigna";
let name;
na??='vikki';  //nullish coalescing operator if na is null or undefined then only assign vikki to na otherwise keep the value of na
name??='vignarathan'; //ecmascript 2020
console.log(na);
console.log(name);
let na1=null;
na1??='vikki';
console.log(na1);