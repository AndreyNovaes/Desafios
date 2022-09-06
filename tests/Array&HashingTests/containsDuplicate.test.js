const containsDuplicate = require('../../Array&Hashing/containsDuplicate');

test('containsDuplicate test', () => {
  const case1 = [1, 2, 3, 1]; // should return true
  const case2 = [1, 2, 3, 4]; // should return false
  const case3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; // should return true
  expect(containsDuplicate(case1)).toEqual(true);
  expect(containsDuplicate(case2)).toEqual(false);
  expect(containsDuplicate(case3)).toEqual(true);
});
