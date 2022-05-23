const medianSortedArrays = require("./medianSortedArrays");


test('medianSortedArrays test ', () => {
  expect(medianSortedArrays([1,3], [2])).toBe(2);
  expect(medianSortedArrays([1,2], [3,4])).toBe(2.5);
  expect(medianSortedArrays([0,0], [0,0,1,1])).toBe(0);
  expect(medianSortedArrays([1,3], [2,4])).toBe(2.5);
  expect(medianSortedArrays([1,2,4,5,6], [3])).toBe(3.5);
});
