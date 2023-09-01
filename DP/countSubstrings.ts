function countSubstrings(s: string): number {
  let n = s.length;
  let count = 0;

  let dp: boolean[] = new Array(n).fill(false);

  for (let center = 0; center < 2 * n - 1; center++) {
    let left = Math.floor(center / 2);
    let right = left + center % 2;

    while (left >= 0 && right < n && s[left] === s[right]) {
      dp[left] = true;
      count++;
      left--;
      right++;
    }

    dp.fill(false);
  }

  return count;
}

// function countSubstrings(s: string): number {
//   let result = 0;
//   let sameCount = 2;

//   if (s.length <= 1) {
//     return 1;
//   }

//   for (let i = s.length - 2; i >= 0; i--) {
//     if (s[i] !== s[i + 1]) {
//       result += 1;
//       sameCount = 2;
//     } else {
//       result += sameCount;
//       sameCount += 1;
//     }
//   }

//   return result;
// };