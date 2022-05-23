const addTwoNumbers = require('./addTwoNumbers');

test('addTwoNumbers test', () => {
  expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([8, 0, 7]);
  expect(addTwoNumbers([0], [0])).toEqual([0]);
  expect(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});
