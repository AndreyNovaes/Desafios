const addTwoNumbers = (l1, l2) => {
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

module.exports = addTwoNumbers;
