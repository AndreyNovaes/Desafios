const twoSum = require('../../Leetcode/TwoPointers/twoSums2');
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

test('twoSums II test', () => {
  const cases = [
    { numbers: [2, 7, 11, 15], target: 9, response: [1, 2] },
    { numbers: [2, 3, 4], target: 6, response: [1, 3] },
    { numbers: [-1, 0], target: -1, response: [1, 2] },
    { numbers: [7, 23], target: 1, response: -1 },
    { numbers: [1, 2, 3, 4, 5, 10, 24, 32, 45], target: 15, response: [5, 6] },
  ];

  for (let i = 0; i < cases.length; i += 1) {
    const { numbers, target, response } = cases[i];
    expect(twoSum(numbers, target)).toEqual(response);
  }
});
