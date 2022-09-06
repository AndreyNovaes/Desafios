const { solve } = require('../../DesafiosTrybe/problems/problem3');
const { problem3FormatInput } = require('./input_test_case');

describe('First test case ', () => {
  it('1.1', () => {
    expect(solve(2017)).toBe('13.09.2017');
  });

  it('1.2', () => {
    expect(solve(2005)).toBe('13.09.2005');
  });

  it('1.3', () => {
    expect(solve(2001)).toBe('13.09.2001');
  });

  it('1.4', () => {
    expect(solve(2022)).toBe('13.09.2022');
  });

  it('1.5', () => {
    expect(solve(1758)).toBe('13.09.1758');
  });

  it('1.6', () => {
    expect(solve(2600)).toBe('13.09.2600');
  });
});

describe('Second test case', () => {
  it('2.1', () => {
    expect(solve(1920)).toBe('12.09.1920');
  });

  it('2.2', () => {
    expect(solve(2020)).toBe('12.09.2020');
  });

  it('2.3', () => {
    expect(solve(2024)).toBe('12.09.2024');
  });

  it('2.4', () => {
    expect(solve(2400)).toBe('12.09.2400');
  });

  it('2.5', () => {
    expect(solve(1520)).toBe('12.09.1520');
  });

  it('2.6', () => {
    expect(solve(2804)).toBe('12.09.2804');
  });
});

describe('Third test case', () => {
  const test_array = problem3FormatInput('tests/DesafiosTrybe/input3.txt');
  let counter = 1;
  for (const each_case of test_array) {
    if (each_case[1]) {
      it(`3.${counter.toString()}`, () => {
        expect(solve(each_case[0])).toBe(`12.09.${each_case[0].toString()}`);
      });
      counter++;
    } else {
      it(`3.${counter.toString()}`, () => {
        expect(solve(each_case[0])).toBe(`13.09.${each_case[0].toString()}`);
      });
      counter++;
    }
  }
});
