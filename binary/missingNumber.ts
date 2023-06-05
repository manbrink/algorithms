function missingNumber(nums: number[]): number {
  let sum = 0;
  let numsSum = 0;

  for (let i = 0; i < nums.length + 1; i++) {
    sum += i;

    if (nums[i]) {
      numsSum += nums[i];
    }
  }

  return sum - numsSum;
}
