function findDuplicates(nums: number[]): number[] {
  let res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;

    if (nums[idx] < 0) {
      res.push(idx + 1);
    }

    nums[idx] = -nums[idx];
  }

  return res;
}

/*

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

-

O(n) time means no sorting

use fact that they're in [1, n]..

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

[4,3,2,7,8,2,3,1]

i = 0
idx = 3
nums[idx] = 7

[4,3,2,-7,8,2,3,1]

i = 1
idx = 2
nums[idx] = 2

[4,3,-2,-7,8,2,3,1]

i = 2
idx = 1
nums[idx] = 3

[4,-3,-2,-7,8,2,3,1]

i = 3
idx = 6
nums[idx] = 3

[4,-3,-2,-7,8,2,-3,1]

i = 4
idx = 7
nums[idx] = 1

[4,-3,-2,-7,8,2,-3,-1]

i = 5
idx = 1
nums[idx] = -3

res = [2]

[4,3,-2,-7,8,2,-3,-1]

i = 6
idx = 2
nums[idx] = -2

res = [2, 3]

[4,3,-2,-7,8,2,-3,-1]

i = 7
idx = 0
nums[idx] = 4

res = [2, 3]

*/
