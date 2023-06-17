function findDuplicate(nums: number[]): number {
  nums.sort();

  let i = 0;
  let j = 1;

  while (i < nums.length - 1) {
    if (nums[i] === nums[j]) {
      return nums[i];
    }

    i += 1;
    j += 1;
  }
}

/*

nums = [1,3,4,2,1]

sorted = [1, 1, 2, 3, 4]

iter 1:

l = [1, 1]
r = [3, 4]

b(left)

  nums = [1, 1]
  midIdx = 1
  l = []


*/

/*

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

-

sort array

binary search

Input: nums = [1,3,4,2,2]
Output: 2

-

sorted: [1, 2, 2, 3, 4]

midIdx = 2

if nums[midIdx - 1] === nums[midIdx] or nums[midIdx + 1] === nums[midIdx]

  return nums[midIdx]

else

  continue search


-

Input: nums = [3,1,3,4,2]
Output: 3

sorted = [1, 2, 3, 3, 4]

*/
