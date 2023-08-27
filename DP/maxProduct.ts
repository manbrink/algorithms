// DP
function maxProductDP(nums: number[]): number {
  // Initialize DP arrays and result variable
  let n = nums.length;
  let maxDp = new Array(n).fill(0);
  let minDp = new Array(n).fill(0);
  let res = nums[0];

  // Base case
  maxDp[0] = nums[0];
  minDp[0] = nums[0];

  // DP iteration
  for (let i = 1; i < n; i++) {
    // Calculate max and min product ending at position i
    maxDp[i] = Math.max(nums[i], nums[i] * maxDp[i - 1], nums[i] * minDp[i - 1]);
    minDp[i] = Math.min(nums[i], nums[i] * maxDp[i - 1], nums[i] * minDp[i - 1]);

    // Update the result if we get a larger product
    res = Math.max(res, maxDp[i]);
  }

  return res;
}

// greedy / iterative

function maxProduct(nums: number[]): number {
  let res = Math.max(...nums);

  let curMin = 1;
  let curMax = 1;

  for (let n of nums) {
    if (n === 0) {
      curMin = 1;
      curMax = 1;
      res = Math.max(res, 0);
    } else {
      let temp = curMax;
      curMax = Math.max(n * curMax, n * curMin, n);
      curMin = Math.min(temp * n, n * curMin, n);
      res = Math.max(res, curMax);
    }
  }

  return res;
}
 
// function maxProduct(nums: number[]): number {
//   let i = 0;
//   let j = 1;

//   let max = nums[i];
//   let curProd = nums[i];

//   while (i < nums.length) {
//     curProd = curProd * nums[j];

//     if (curProd >= max) {
//       max = curProd;
//       j += 1;
//     } else {
//       i = j;
//       curProd = nums[j];
//     }
//   }

//   return max;
// };