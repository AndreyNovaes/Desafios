// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Explanation: 0 + 0 = 0.

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
// Explanation: 9999999 + 9999 = 10009998.

const addTwoNumbers = (l1, l2) => {
  let vaiUm = 0;
  const sumArr = [];
  let sum;
  const l1LastIndex = l1.length - 1;
  const l2LastIndex = l2.length - 1;

  for (let i = 0; i < l1.length || i < l2.length || vaiUm; i += 1) {
    if (l1.length !== l2.length) {
      sum = (l1[l1LastIndex - i] || 0) + (l2[l2LastIndex - i] || 0);
    } else {
      sum = (l1[i] || 0) + (l2[i] || 0);
    }

    sum += vaiUm;
    vaiUm = 0;
    if (sum >= 10) {
      sum -= 10;
      vaiUm = 1;
    }
    sumArr.push(sum);
  }
  if (l1.length !== l2.length) {
    return sumArr;
  }
  return sumArr.reverse();
};

module.exports = addTwoNumbers;
