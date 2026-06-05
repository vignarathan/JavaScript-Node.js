function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const twice = multiplier(2);
const thrice = multiplier(3);

console.log(twice(5)); // Output: 10
console.log(thrice(8)); // Output: 24
// In this example, the multiplier function is a higher-order function that takes a factor as an argument and returns an inner function. The inner function takes a number as an argument and multiplies it by the factor defined in the outer function's scope. Each time we call twice or thrice with a different number, it uses the respective factor to calculate and return the result.
