function wordBreak(inputString: string, wordDictionary: string[]): boolean {
  // Create a dynamic programming array initialized with false values
  // dp[i] will be true if the substring from index i to the end can be segmented into dictionary words
  let canBeSegmented = Array(inputString.length + 1).fill(false);
  
  // Base case: an empty string can always be segmented
  canBeSegmented[inputString.length] = true;

  // Start from the end of the string and move towards the beginning
  for (let currentIndex = inputString.length - 1; currentIndex >= 0; currentIndex--) {
    // Check each word in the dictionary to see if it can form a valid segment starting from currentIndex
    for (let dictionaryWord of wordDictionary) {
      let endIndex = currentIndex + dictionaryWord.length;

      // Check if the current segment matches the dictionary word
      if (endIndex <= inputString.length && inputString.slice(currentIndex, endIndex) === dictionaryWord) {
        canBeSegmented[currentIndex] = canBeSegmented[endIndex];
      }

      // If the string starting from currentIndex can be segmented, break out of the loop
      if (canBeSegmented[currentIndex]) {
        break;
      }
    }
  }

  // Return whether the entire string can be segmented
  return canBeSegmented[0];
}


/*

brute force: create all possible segmentations, for each segmentation - check if all segments are in
the word dict.  return true if so.

iterate the string and keep a map of segments that have been checked.  if it's not present,
put false - else true.












*/