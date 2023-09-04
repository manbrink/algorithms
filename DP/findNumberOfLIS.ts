function findNumberOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  let countLIS: number[] = new Array(nums.length).fill(1);
  let lenLIS: number[] = new Array(nums.length).fill(1);
  
  let maxGlobalLength = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        if (lenLIS[j] + 1 > lenLIS[i]) {
          lenLIS[i] = lenLIS[j] + 1;
          countLIS[i] = countLIS[j];
        } else if (lenLIS[j] + 1 === lenLIS[i]) {
          countLIS[i] += countLIS[j];
        }
      }
    }
    maxGlobalLength = Math.max(maxGlobalLength, lenLIS[i]);
  }

  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (lenLIS[i] === maxGlobalLength) {
      total += countLIS[i];
    }
  }

  return total;
}
