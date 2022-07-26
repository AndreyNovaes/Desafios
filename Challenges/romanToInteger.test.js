const romanToInt = require('./romanToInteger');

test('romanToInt test', () => {
  expect(romanToInt('I')).toBe(1);
  expect(romanToInt('II')).toBe(2);
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('V')).toBe(5);
  expect(romanToInt('LVIII')).toBe(58);
  expect(romanToInt('MCMXCIV')).toBe(1994);
});
