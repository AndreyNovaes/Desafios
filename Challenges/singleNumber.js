// Input: nums = [2,2,1]
// Output: 1
// Explanation: the array contains 1 unique value, and 1 is the unique value.

// Input: nums = [4,1,2,1,2]
// Output: 4
// Explanation: the array contains 2 unique values, and 2 is the unique value.

// Input: nums = [1]
// Output: 1
// Explanation: the array contains 1 unique value, and 1 is the unique value.

const singleNumber = (nums) => {
  const uniqueNumber = nums.find((integer) => nums.indexOf(integer) === nums.lastIndexOf(integer));
  return uniqueNumber;
};

module.exports = singleNumber;
