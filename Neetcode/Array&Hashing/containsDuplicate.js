// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// explanation: if the array contains duplicate elements,
// return true otherwise return false

const containsDuplicate = (nums) => {
  const set = new Set();
  for (let i = 0; i < nums.length; i += 1) {
    set.add(nums[i]);
  }
  if (set.size === nums.length) {
    return false;
  }
  return true;
};

// results for this containsDuplicate:
// https://leetcode.com/submissions/detail/792987946/
// advantages: great speed, good memory usage, good readability
// disavantages: could have a better readability
// Runtime: 87 ms, faster than 95.50% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 50.5 MB, less than 73.53% of JavaScript online submissions for Contains Duplicate.

module.exports = containsDuplicate;
