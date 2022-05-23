const { binarySearch, searchWithIndexOf } = require('./binarySearch');

test('binarySearch test', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4);
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 12)).toBe(5);
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 11)).toBe(-1);
});

test('searchWithIndexOf test', () => {
  expect(searchWithIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4);
  expect(searchWithIndexOf([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  expect(searchWithIndexOf([-1, 0, 3, 5, 9, 12], 12)).toBe(5);
  expect(searchWithIndexOf([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  expect(searchWithIndexOf([-1, 0, 3, 5, 9, 12], 11)).toBe(-1);
});
