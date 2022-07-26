const addTwoNumbers = (l1, l2) => {
  let vaiUm = 0;
  const sumArr = [];
  let sum;

  for (let i = 0; i < l1.length || i < l2.length || vaiUm; i += 1) {
    sum = (l1[i] || 0) + (l2[i] || 0);

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

// const lista1 = [2, 4, 3];
// const lista2 = [5, 6, 4];
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// const l1Hard = [9, 9, 9, 9, 9, 9, 9];
// const l2Hard = [9, 9, 9, 9];
// hard Output: [8,9,9,9,0,0,0,1]
// sum 10009998

module.exports = addTwoNumbers;
