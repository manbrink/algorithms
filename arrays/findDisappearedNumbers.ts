function findDisappearedNumbers(nums: number[]): number[] {
  let res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1; // we use abs to account for the negative values we have already set.
    nums[idx] = -1 * Math.abs(nums[idx]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }

  return res;
}

/*

Do in O(n) time, O(1) space

-

Input: nums = [4,3,2,7,8,2,3,1]

nums = [-1,-1,-1,-1,8,2,-1,-1]

Output: [5,6]

Input: nums = [1,1]
Output: [2]

-

O(n) time means no sorting?

-

with sorting:

sort nums

    [1,2,2,3,3,4,7,8]

for each num:

    if difference bw num and next num > 1:

        for (1..difference):

            add num + i to missing nums



*/
