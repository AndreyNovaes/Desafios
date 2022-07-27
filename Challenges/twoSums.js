// input 1: [2, 7, 11, 15], target = 9
// output: [0, 1]
// explanation: nums[0] + nums[1] = 2 + 7 = 9

// input 2: [3, 2, 4], target = 6
// output: [1, 2]
// explanation: nums[1] + nums[2] = 2 + 4 = 6

// input 3: [3, 3], target = 6
// output: [0, 1]
// explanation: nums[0] + nums[1] = 3 + 3 = 6

// input 4: [3, 2, 4], target = 6
// output: [1, 2]
// explanation: nums[1] + nums[2] = 2 + 4 = 6

const twoSums = (nums, target) => {
  const sup = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const element = nums[i];

    if (sup.has(target - element)) {
      return [i, sup.get(target - element)].sort();
    }
    sup.set(element, i);
  }
  return [0];
};

module.exports = twoSums;
