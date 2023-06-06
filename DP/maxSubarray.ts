function maxSubArray(nums: number[]): number {
  let currentSum = 0;
  let largestSum = nums[0];

  for (let num of nums) {
    currentSum = Math.max(num, currentSum + num);
    largestSum = Math.max(currentSum, largestSum);
  }

  return largestSum;
}

/*

For example, for the array of values [−2, 1, −3, 4, −1, 2, 1, −5, 4], 
the contiguous subarray with the largest sum is [4, −1, 2, 1], with sum 6.

[−2, 1, −3, 4, −1, 2, 1, −5, 4]

i=0
currentSum=-2
largestSum=0

i=1
currentSum=-1
largestSum=0

i=2
currentSum=-1
largestSum=0

i=3
currentSum=4
largestSum=4

...

https://en.wikipedia.org/wiki/Maximum_subarray_problem

*/
