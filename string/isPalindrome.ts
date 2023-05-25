function isPalindrome(s: string): boolean {
  const cleanS = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  let i = 0;
  let k = cleanS.length - 1;

  while (i <= k) {
    if (cleanS[i] !== cleanS[k]) {
      return false;
    }
    i += 1;
    k -= 1;
  }

  return true;
}

// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = " "
// Output: true
