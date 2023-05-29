function majorityElement(nums: number[]): number {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
}

/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

(Solve in O(n) time and O(1) space)

-

constant space means change something in place or use a fixed set of external variables.

can't use frequency hash as this is O(n) space.

-

Imagine the sorted version of the array. Because the majority element occupies more than half of the array, 
it must appear at the midpoint of the array. No matter how the rest of the elements are distributed, 
the majority element will always occupy the midpoint.


*/
