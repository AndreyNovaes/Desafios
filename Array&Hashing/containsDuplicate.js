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

module.exports = containsDuplicate;
