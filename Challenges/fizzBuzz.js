const arrOfTargets = [3, 5, 15, 45, 7, 81];
const arrOfResponses = ['fizz', 'buzz', 'fizzbuzz', 'megafizzbuzz', 'solofizz', 'humblefizz'];

const KeyValueMapI = new Map();
for (let i = 0; i < arrOfTargets.length; i += 1) {
  KeyValueMapI.set(arrOfTargets[i], arrOfResponses[i]);
}

const zeroToAHundred = Array.from(Array(101).keys());

class DinamicFizzBuzz {
  constructor(KeyValueMap, iterableArray) {
    this.KeyValueMap = KeyValueMap;
    this.iterableArray = iterableArray;
  }

  getFizzBuzz() {
    const fizzBuzzArray = [];
    for (let i = 0; i < this.iterableArray.length; i += 1) {
      const currentValue = this.iterableArray[i];
      const currentResponse = this.KeyValueMap.get(currentValue);
      fizzBuzzArray.push(currentResponse || currentValue);
    }
    return fizzBuzzArray;
  }
}

const fizzBuzz = new DinamicFizzBuzz(KeyValueMapI, zeroToAHundred);
console.log(fizzBuzz.getFizzBuzz());
