const validAnagram = require('../../Array&Hashing/validAnagram');

test('validAnagram test', () => {
  const case1 = { s: 'anagram', t: 'nagaram' }; // should return true
  const case2 = { s: 'rat', t: 'car' }; // should return false
  const case3 = { s: '', t: 'stars' }; // should return false
  const case4 = { s: 'contest', t: 'contester' }; // should return false
  expect(validAnagram(case1.s, case1.t)).toEqual(true);
  expect(validAnagram(case2.s, case2.t)).toEqual(false);
  expect(validAnagram(case3.s, case3.t)).toEqual(false);
  expect(validAnagram(case4.s, case4.t)).toEqual(false);
});
