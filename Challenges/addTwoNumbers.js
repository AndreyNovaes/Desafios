/* eslint-disable no-unused-expressions */
const console = require('console');

// refactoring

const addTwoNumbers = (l1, l2) => {
  let greater;
  let minor;
  l1.length > l2.length ? greater = l1 : greater = l2;
  l1.length < l2.length ? minor = l1 : minor = l2;
  const diff = greater.length - minor.length;
  console.log(greater, minor, diff);
  const sum = [];
  for (let i = 0; i <= greater.length; i += 1) {
    if (l1[i] && l2[i]) {
      sum.push(l1[i] + l2[i]);
    } else if (!l2[i] && l1[i]) {
      sum.push[l1[i]];
    } else if (!l1[i] && l2[i]) {
      sum.push(l2[i]);
    }
  }
  return sum;
};

// refactoring

const lista1 = [2, 4, 3];
const lista2 = [5, 6, 4];
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

console.log(addTwoNumbers(lista1, lista2));

module.exports = addTwoNumbers;
