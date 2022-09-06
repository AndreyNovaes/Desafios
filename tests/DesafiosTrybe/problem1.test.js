const { solve } = require('../../DesafiosTrybe/problems/problem1');
const { problem1FormatInput } = require('./input_test_case')

describe('First test case ', () => {
  it('1.1', () => {
    expect(solve([-1, -3, 4, 2], 3)).toBe('NÃO');
  });

  it('1.2', () => {
    expect(solve([0, -1, 2, 1], 2)).toBe('SIM');
  });
  
});

describe('Second test case', () => {
    it('2.1', () => {
      expect(solve([-93, -86, 49, -62, -90, -63, 40, 72, 11, 67], 4)).toBe("SIM");
    });

    it('2.2', () => {
        expect(solve([23, -35, -2, 58, -67, -56, -42, -73, -19, 37], 10)).toBe("NÃO");
    });

    it('2.3', () => {
        expect(solve([13, 91, 56, -62, 96, -5, -84, -36, -46, -13], 9)).toBe("NÃO");
    });

    it('2.4', () => {
        expect(solve([19, 29, -17, -71, -75, -27, -56, -53, 65, 83], 2)).toBe("SIM");
    });
    
    it('2.5', () => {
          expect(solve([-58, -29, -35, -18, 43, -28, -76, 43, -13, 6], 3)).toBe("SIM");
    });
  
    it('2.6', () => {
          expect(solve([88, -17, -96, 43, 83, 99, 25, 90, -39, 86], 1)).toBe("SIM");
    });
    
  
  });

  describe('Third test case', () => {
    let test_array = problem1FormatInput('tests/DesafiosTrybe/input1.txt')
    let counter = 1
    for(let each_case of test_array){
        it('3.'+counter.toString(), () => {
            expect(solve(each_case[0], each_case[1])).toBe(each_case[2]);
          });
        counter++
    }

  });