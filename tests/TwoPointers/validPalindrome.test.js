const validPalindrome = require('../../Leetcode/TwoPointers/validPalindrome');

test('validPalindrome test', () => {
  const case1 = "A man, a plan, a canal: Panama"; // true
  const case2 = "race a car" // false
  const case3 = " " // true
  expect(validPalindrome(case1)).toEqual(true);
  expect(validPalindrome(case2)).toEqual(false)
  expect(validPalindrome(case3)).toEqual(true)
});
