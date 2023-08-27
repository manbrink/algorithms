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