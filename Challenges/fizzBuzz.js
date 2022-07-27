// Input: n = 3
// Output:["1","2","Fizz"]

// Input: n = 9
// Output:["1","2","Fizz","4","Buzz","Fizz","7","8","FizzBuzz"]

// Input: n = 15
// Output:["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14", "FizzBuzz"]

// explanation: Fizz is divisible by 3 only
// Buzz is divisible by 5 only
// FizzBuzz is divisible by 3 and 5 at the same time

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
