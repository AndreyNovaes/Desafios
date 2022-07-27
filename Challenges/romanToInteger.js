// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const romanToInt = (romanSymbol) => {
  const map = new Map();
  map.set('I', 1).set('V', 5).set('X', 10).set('L', 50)
    .set('C', 100)
    .set('D', 500)
    .set('M', 1000);

  const arrayOfIntegers = [];
  for (let i = 0; i < romanSymbol.length; i += 1) {
    const value = map.get(romanSymbol[i]);
    arrayOfIntegers.push(value);
  }
  if (arrayOfIntegers.length === 1) {
    return arrayOfIntegers[0];
  }

  let sum = 0;
  for (let i = 0; i < arrayOfIntegers.length; i += 1) {
    if (i + 1 < arrayOfIntegers.length) {
      if (arrayOfIntegers[i] < arrayOfIntegers[i + 1]) {
        sum -= arrayOfIntegers[i];
      } else {
        sum += arrayOfIntegers[i];
      }
    } else {
      sum += arrayOfIntegers[i];
    }
  }
  return sum;
};

module.exports = romanToInt;
