function nextGreatestLetter(letters, target) {
  let low = 0;
  let high = letters.length - 1;

  while (low <= high) {
    let midIdx = Math.floor((low + high) / 2);
    let midCh = letters[midIdx];

    if (target >= midCh) {
      low = midIdx + 1;
    } else {
      high = midIdx - 1;
    }
  }

  // If low is still within the array bounds, return the letter at index low
  // Otherwise, return the first character in the letters array
  return letters[low % letters.length];
}

/*

Input: letters = ["c","f","j"], target = "a"
Output: "c"

l = 0
h = 2
m = 1
ch = f

l = 0
h = 0
m = 0
ch = c

l = 0

0 % 3 = 0




*/
