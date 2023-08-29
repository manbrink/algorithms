function canJump(nums: number[]): boolean {
  let farthest = 0; // furthest index that can be reached from any point so far
  
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false;
    }
    farthest = Math.max(farthest, i + nums[i]);
  }
  
  return true;
}


// function canJump(nums: number[]): boolean {
//   let dp: boolean[] = Array(nums.length).fill(false);
//   let gap = 0;

//   if (nums.length === 1) {
//     return true;
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0 || nums[i] < gap) {
//       gap += 1;
//     } else {
//       dp[i] = true;
//       gap = 0;
//     }
//   }

//   return dp[0];
// };