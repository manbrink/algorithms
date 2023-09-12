function canPartitionKSubsets(nums: number[], k: number): boolean {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  if (totalSum % k !== 0) {
    return false;
  }

  const targetSum = totalSum / k;
  const n = nums.length;

  const dp: boolean[] = new Array(1 << n).fill(false);
  const subsetSum: number[] = new Array(1 << n).fill(0);

  for (let mask = 0; mask < (1 << n); mask++) {
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) !== 0) {
        subsetSum[mask] = subsetSum[mask ^ (1 << i)] + nums[i];
        if (subsetSum[mask] === targetSum) {
          dp[mask] = true;
        }
      }
    }
  }

  for (let mask = 0; mask < (1 << n); mask++) {
    if (dp[mask]) {
      const complement = ((1 << n) - 1) ^ mask;
      for (let sub = complement; sub > 0; sub = (sub - 1) & complement) {
        if (subsetSum[sub] === targetSum) {
          dp[mask | sub] = true;
        }
      }
    }
  }

  return dp[(1 << n) - 1];
}





// function canPartitionKSubsets(nums: number[], k: number): boolean {
//   let targetSum = nums.reduce((acc, num) => acc + num, 0) / k;
//   let lowestSumIdx = 0;
//   let subsets = Array(k).fill(new Array());
//   let subsetSums = Array(k).fill(0);

//   for (let i = 0; i < nums.length; i++) {
//     let added = false;

//     for(let j = 0; j < subsets.length; j++) {
//       if (subsetSums[j] + nums[i] === targetSum) {
//         subsets[j].push(nums[i]);
//         subsetSums[j] += nums[i];
//         added = true;
//       }
//     }

//     if (!added) {
//       subsets[lowestSumIdx].push(nums[i]);
//       subsetSums[lowestSumIdx] += nums[i];
//     }

//     let lowest = subsetSums[0];
//     for (let i = 1; i < subsetSums.length; i += 1) {
//       if (subsetSums[i] < lowest) {
//         lowestSumIdx = i;
//         lowest = subsetSums[i];
//       } 
//     }
//   }

//   for (let i = 0; i < subsetSums.length; i+= 1) {
//     if (subsetSums[i] !== subsetSums[0]) {
//       return false;
//     }
//   }

//   return true;
// };