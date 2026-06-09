function increment(x) {
    x = x + 1;
    return x;
}
let a = 5; 
let b = increment(a);
console.log(a); // Output: 5
console.log(b); // Output: 6
// In this example, the increment function takes a number x as an argument, increments it by 1, and returns the new value. However, when we call increment(a), it does not modify the original variable a because JavaScript passes primitive values (like numbers) by value. Instead, it creates a copy of a and operates on that copy. Therefore, a remains unchanged at 5, while b receives the incremented value of 6. 

function changeMyname(obj) {
    obj.name = "Vignarathan";  // Modifying the property of the object
}
let person = { name: "vikki" };
changeMyname(person);
console.log(person.name); // Output: "Vignarathan"
// In this example, the changeMyname function takes an object as an argument and modifies its name property. When we pass the person object to the function, it changes the name property of that object. This is because objects in JavaScript are passed by reference, meaning that the function receives a reference to the original object, allowing it to modify the object's properties directly. Therefore, after calling changeMyname(person), the name property of the person object is updated to "Vignarathan".

console.log(changeMyname.name); // Output: "changeMyname"
console.log(changeMyname.length); // Output: 1
console.log(changeMyname.toString()); // Output: the source code of the function as a string