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

// input 1: [2, 7, 11, 15], target = 9
// console.log(twoSums([2, 7, 11, 15], 9));
// output: [0, 1]

// input 2: [3, 2, 4], target = 6
// console.log(twoSums([3, 2, 4], 6));
// output: [1, 2]

// input 3: [3, 3], target = 6
// console.log(twoSums([3, 3], 6));
// output: [0, 1]

// input 4: [3, 2, 4], target = 6
// console.log(twoSums([3, 2, 4], 6));
// output: [1, 2]

module.exports = twoSums;
