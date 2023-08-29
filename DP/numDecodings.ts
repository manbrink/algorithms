function numDecodings(s: string): number {
  if (s[0] === '0') return 0; // edge case, can't decode a string that starts with '0'

  let dp = Array(s.length + 1).fill(0); // length + 1 to consider empty string
  dp[s.length] = 1; // base case, one way to decode an empty string

  // Initialize the last element
  dp[s.length - 1] = s[s.length - 1] === '0' ? 0 : 1;

  for (let i = s.length - 2; i >= 0; i--) {
    if (s[i] === '0') {
      dp[i] = 0; // no way to decode a number that starts with '0'
    } else {
      dp[i] = dp[i + 1]; // single digit decoding

      const twoDigits = parseInt(s.substring(i, i + 2));
      if (twoDigits >= 10 && twoDigits <= 26) {
        dp[i] += dp[i + 2]; // two-digit decoding
      }
    }
  }

  return dp[0];
}

// why go backwards?
// explain 'optimal substructure'

// function numDecodings(s: string): number {
//   let dp = Array(s.length).fill(0);
//   dp[0] = 1;

//   if (s[0] === '0') {
//     return 0;
//   }

//   for (let i = 1; i < s.length; i++) {
//     if (parseInt(s[i]) > 0) {
//       if (parseInt(s[i - 1]) === 0 || parseInt(s.slice(i - 1, i + 1)) > 26) {
//         dp[i] = dp[i - 1];
//       } else {
//         dp[i] = dp[i - 1] + 1;
//       }
//     }
//   }

//   return dp[dp.length - 1];
// };