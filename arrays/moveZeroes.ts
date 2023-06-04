/**
 Do not return anything, modify nums in-place instead.
 */

// i is iteration index
// j is last replacement index

function moveZeroes(nums: number[]): void {
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      const x: number = nums[j];
      nums[j] = nums[i];
      nums[i] = x;
      j++;
    }
  }
}
