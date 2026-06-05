function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const counter = createCounter();
counter();// Output: 1
counter();// Output: 2
counter();// Output: 3
// In this example, createCounter is a higher-order function that returns an inner function. The inner function has access to the count variable defined in the outer function's scope, allowing it to maintain state across multiple calls. Each time the counter function is called, it increments and logs the current count.
//here when we call counter() repeatedly,it give the incremented value

function createCounter1() {
    let count = 0;
    return function(count) {
        count++;
        console.log(count);
    };
}
const counter1 = createCounter1();
counter1(8);// Output: 9
counter1(4);// Output: 5
counter1(10);// Output: 11
// In this example, the inner function takes a parameter named count, which shadows the count variable in the outer function. Each time counter1 is called with a different argument, it increments that argument and logs the result. The outer count variable remains unchanged and is not used in this case. 