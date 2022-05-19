export default addTwoNumbers = (l1, l2) => {
  const l1Int = arrayToInteger(l1);
  const l2Int = arrayToInteger(l2);
  const sum = Number(l1Int) + Number(l2Int);
  const newArray = intToArray(sum);
  if (l1.length !== l2.length) {
    return newArray.reverse();
  }
  return newArray;
};

const arrayToInteger = (arr) => {
  arr.reverse();
  const integer = arr.join('');
  return integer;
};

const intToArray = (integer) => {
  const arrayOfStrings = Array.from(String(integer));
  const arrayOfIntegers = arrayOfStrings.map((string) => parseInt(string, 10));
  return arrayOfIntegers;
};

// Add Two Numbers
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
