// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Explanation: Reverse the order of characters in the array.

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

const reverseString = (s) => {
  const inverseArr = [];
  for (let i = s.length - 1; i >= 0; i -= 1) {
    inverseArr.push(s[i]);
  }
  return inverseArr;
};

module.exports = reverseString;
