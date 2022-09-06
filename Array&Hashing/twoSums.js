// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSums = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    const wantedValue = target - nums[i];
    const lastIndexOfWanted = nums.lastIndexOf(wantedValue);
    if (lastIndexOfWanted > 0 && i !== lastIndexOfWanted) {
      return [i, lastIndexOfWanted];
    }
  }
  return -1;
};

// results for this twoSums:
// https://leetcode.com/submissions/detail/792985349/
// advantages: very legible and good memory usage
// disavantages: very slow
// Runtime: 384 ms, faster than 5.01% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.1 MB, less than 91.78% of JavaScript online submissions for Two Sum.

module.exports = twoSums;
