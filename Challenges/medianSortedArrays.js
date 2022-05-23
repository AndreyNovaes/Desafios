const  medianSortedArrays = (nums1, nums2) => {
  const concat = [...nums1, ...nums2].sort((a, b) => a - b);
  const { length } = concat;
  const index = Math.floor(length / 2);
  const median = length % 2 === 1
    ? concat[index] : (concat[index - 1] + concat[index]) / 2;
  return median;
};

export default medianSortedArrays;

// medianSortedArrays

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.