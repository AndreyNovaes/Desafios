// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function ispalindrome(s) {
  const sAlphaNumLowerCase = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const lastIndex = sAlphaNumLowerCase.length - 1;
  let reversedSAlphaNumLowerCase = '';
  for (let i = lastIndex; i >= 0; i -= 1) {
    reversedSAlphaNumLowerCase += sAlphaNumLowerCase[i];
  }
  return reversedSAlphaNumLowerCase === sAlphaNumLowerCase;
}

// results for this isPalindrome:
// https://leetcode.com/submissions/detail/793844064/
// advantages: good speed and ok memory usage
// disavantages: bad readability, could be better in either ways, runtime and memory usage
// Runtime: 102 ms, faster than 64.32% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 46.7 MB, less than 36.94% of JavaScript online submissions for Valid Palindrome.

module.exports = ispalindrome;
