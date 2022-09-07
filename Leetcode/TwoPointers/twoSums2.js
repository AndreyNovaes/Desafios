// Given a 1-indexed array of integers numbers that is already sorted
// in non-decreasing order, find two numbers such that they add up
// to a specific target number. Let these two numbers be
// numbers[index1] and numbers[index2]
// where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added
// by one as an integer array [index1, index2] of length 2.

// Your solution must use only constant extra space.

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

function twoSum(numbers, target) {
  let minor = 0;
  let major = numbers.length - 1;
  while (minor < major) {
    const sum = numbers[minor] + numbers[major];
    const isWantedSum = sum === target;
    if (isWantedSum) {
      return [minor + 1, major + 1];
    }
    const isTargetGreater = target > sum;
    const isTargetLesser = target < sum;
    if (isTargetGreater) minor += 1;
    if (isTargetLesser) major -= 1;
  }
  return -1;
}
// results for this twoSums II - input array is sorted:
// https://leetcode.com/submissions/detail/794058445/
// advantages: good speed, great memory usage
// disavantages: could be a better readability and speed
// Runtime: 99 ms, faster than 44.29% of JavaScript online submissions
// Memory Usage: 42.5 MB, less than 92.02% of JavaScript online submissions

module.exports = twoSum;
