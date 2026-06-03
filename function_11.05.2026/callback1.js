setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000); //setTimeout is a built-in function that executes a function after a specified delay (in milliseconds)

function greet() {
    console.log("Hello, welcome to JavaScript!");
}
setTimeout(greet, 4000); //greet is a callback function that will be executed after 4 seconds 