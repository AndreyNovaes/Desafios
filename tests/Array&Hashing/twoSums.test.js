const twoSums = require('../../Leetcode/Array&Hashing/twoSums');

test('twoSums test', () => {
  expect(twoSums([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSums([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSums([3, 3], 6)).toEqual([0, 1]);
  expect(twoSums([10, 20, 30], 11)).toEqual(-1);
});
