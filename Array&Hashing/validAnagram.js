// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

const validAnagram = (s, t) => {
  if (!(s && t)) {
    return false;
  }
  if (s.length !== t.length) {
    return false;
  }
  const wordS = new Map();
  const wordT = new Map();
  for (let i = 0; i < s.length; i += 1) {
    wordS.set(s[i], (wordS.get(s[i]) || 0) + 1);
    wordT.set(t[i], (wordT.get(t[i]) || 0) + 1);
  }
  let isTrue = true;
  wordS.forEach((value, key) => {
    if (!wordT.has(key) || wordT.get(key) !== value) {
      isTrue = false;
    }
  });
  return isTrue;
};

module.exports = validAnagram;
