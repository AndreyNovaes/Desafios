const medianSortedArrays = (nums1, nums2) => {
  const concat = [...nums1, ...nums2].sort((a, b) => a - b);
  const { length } = concat;
  const index = Math.floor(length / 2);
  const median = length % 2 === 1
    ? concat[index] : (concat[index - 1] + concat[index]) / 2;
  return median;
};

module.exports = medianSortedArrays;
