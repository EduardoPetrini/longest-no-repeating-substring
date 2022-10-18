const run = (inputString) => {
  if (!inputString) {
    return 0;
  }

  let result = 0;
  for (let indexA = 0; indexA < inputString.length; indexA++) {
    const knownLetters = {};

    let indexB = indexA;
    while (indexB < inputString.length) {
      const letterB = inputString.charAt(indexB);

      const isKnownLetter = knownLetters[letterB];
      if (isKnownLetter) {
        const currentKnownLettersCount = Object.keys(knownLetters).length;
        result = Math.max(currentKnownLettersCount, result);
        break;
      }

      knownLetters[letterB] = true;
      indexB = indexB + 1;
    }
  }

  return result;
};

const findLongestSubstring = (inputString = "abcabcbcbb") => {
  const longestSubstringLength = run(inputString);

  return longestSubstringLength;
};

export { findLongestSubstring, run };
