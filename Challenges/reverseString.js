// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

const reverseString = (s) => {
  const inverseArr = [];
  const lastIndex = s.length - 1;
  for (let i = lastIndex; i >= 0; i -= 1) {
    inverseArr.push(s[i]);
  }
  return inverseArr;
};

// const input1 = ['h', 'e', 'l', 'l', 'o'];
// const input2 = ['H', 'a', 'n', 'n', 'a', 'h'];
// console.log(reverseString(input1));
// console.log(reverseString(input2));

module.exports = reverseString;
