// dp method
function longestPalindrome(s: string): string {
  let n = s.length;
  let dp: boolean[][] = Array.from(Array(n), () => Array(n).fill(false));
  let start = 0;  // The starting index of longest palindromic substring found so far
  let maxLen = 1; // Length of longest palindromic substring found so far

  // Every single character is a palindrome
  for (let i = 0; i < n; ++i) {
      dp[i][i] = true;
  }

  // Check two-character substrings
  for (let i = 0; i < n - 1; ++i) {
      if (s[i] == s[i + 1]) {
          dp[i][i+1] = true;
          start = i;
          maxLen = 2;
      }
  }

  // Check longer substrings
  for (let len = 3; len <= n; ++len) {  // length of substring
      for (let i = 0; i <= n - len; ++i) {
          let j = i + len - 1;  // ending index of current substring
          if (s[i] == s[j] && dp[i + 1][j - 1]) {  // check palindrome
              dp[i][j] = true;
              if (len > maxLen) {
                  start = i;
                  maxLen = len;
              }
          }
      }
  }

  return s.substring(start, start + maxLen);
}


// center expansion method
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