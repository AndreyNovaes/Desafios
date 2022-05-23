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
