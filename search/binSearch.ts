// check value at middle index of nums.  if target less, recursively search bottom half
// else recursively search top half.

function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const curIdx = Math.floor((end - start + 1) / 2) + start;

    if (nums[curIdx] === target) {
      return curIdx;
    } else if (target < nums[curIdx]) {
      end = curIdx - 1;
    } else {
      start = curIdx + 1;
    }
  }

  return -1;
}

// [-1,0,3,5,9,12], 9

// start = 0;
// end = 5;
// curIdx = 2;

// start = 3;
// end = 5;
// curIdx = 4;
