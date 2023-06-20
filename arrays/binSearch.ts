function binSearch(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

/*
call 1
nums = [-1,0,3,5,9,12]
target = 9
midIdx = 3
midNum = 5

call 2
nums = [9,12]
target = 9
midIdx = 1
midNum = 12

call 3
nums = [9]
target = 9
midIdx = 0
midNum = 9

  return midIdx: error - returning idx of subarray, not whole original array


*/
