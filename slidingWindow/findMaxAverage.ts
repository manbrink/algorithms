function findMaxAverage(nums: number[], k: number): number {
  let maxAverage = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    sum += nums[windowEnd];
    const average = calculateAverage(sum, k);

    // if we reach the required subarray length
    if (windowEnd >= k - 1) {
      maxAverage = average > maxAverage ? average : maxAverage;

      // subtract element that's going out of window
      sum = sum - nums[windowStart];

      // increase window start
      windowStart++;
    }
  }

  return maxAverage;
}

function calculateAverage(sum: number, count: number) {
  return Number((sum / count).toFixed(5));
}
