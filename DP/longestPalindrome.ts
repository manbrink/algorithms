function longestPalindrome(s: string): string {
  let res = "";
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {

      // check odd length palindromes
      let left = i;
      let right = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          if (right - left + 1 > resLen) {
              res = s.slice(left, right + 1);
              resLen = right - left + 1;
          }
          left -= 1;
          right += 1;
      }

      // check even length palindromes
      left = i;
      right = i + 1;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          if (right - left + 1 > resLen) {
              res = s.slice(left, right + 1);
              resLen = right - left + 1;
          }
          left -= 1;
          right += 1;
      }
  }

  return res;
}