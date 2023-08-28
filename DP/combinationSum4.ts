function combinationSum4(nums: number[], target: number): number {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
}

// naive backtracking
// function combinationSum4(nums: number[], target: number): number {
//   let combinations = 0;

//   backtrack(0);

//   return combinations;

//   function backtrack(currentSum: number) {
//     if (currentSum > target) {
//       return;
//     }

//     if (currentSum === target) {
//       combinations += 1;
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       backtrack(currentSum + nums[i]);
//     }
//   }
// };