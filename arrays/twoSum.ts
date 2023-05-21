function twoSumNaive(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function twoSum(nums: number[], target: number): number[] {
  let numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (numMap.has(diff)) {
      console.log([numMap.get(diff), i]);
      return [numMap.get(diff), i];
    } else {
      numMap.set(nums[i], i);
    }
  }

  return [-1, -1];
}

twoSum([2, 7, 11, 15], 9);

twoSum([3, 2, 4], 6);

twoSum([3, 3], 6);
