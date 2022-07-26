const medianSortedArrays = (nums1, nums2) => {
  const concat = [...nums1, ...nums2].sort((a, b) => a - b);
  const { length } = concat;
  const index = Math.floor(length / 2);
  const median = length % 2 === 1
    ? concat[index] : (concat[index - 1] + concat[index]) / 2;
  return median;
};
// input 1: [1,3], [2]
// console.log(medianSortedArrays([1, 3], [2]));
// output: 2.0 => 2

// input 2: [1,2], [3,4]
// console.log(medianSortedArrays([1, 2], [3, 4]));
// output: 2.5

// input 3: [1,2,3], [4,5,6]
// console.log(medianSortedArrays([1, 2, 3], [4, 5, 6]));
// output: 3.5

// input 4: [1,2,3,4], [5,6,7,8]
// console.log(medianSortedArrays([1, 2, 3, 4], [5, 6, 7, 8]));
// output: 4.5

module.exports = medianSortedArrays;
