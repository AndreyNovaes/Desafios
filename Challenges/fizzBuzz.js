// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a strfizzBuzz(3);
// fizzBuzz(5);
// fizzBuzz(15);
// fizzBuzz(30);

// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14"
// Fizz is divisible by 3
// Buzz is divisible by 5
// FizzBuzz is divisible by 3 and 5

const fizzBuzz = (n) => {
  const arrFizzBuzz = [];
  for (let i = n; i > 0; i -= 1) {
    if (i % 15 === 0) {
      arrFizzBuzz.push('FizzBuzz');
    } else if (i % 5 === 0) {
      arrFizzBuzz.push('Buzz');
    } else if (i % 3 === 0) {
      arrFizzBuzz.push('Fizz');
    } else {
      arrFizzBuzz.push(i.toString());
    }
  }
  return arrFizzBuzz.reverse();
};

module.exports = fizzBuzz;
