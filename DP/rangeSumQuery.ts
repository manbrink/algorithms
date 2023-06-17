class NumArray {
  nums: number[];
  prefixNums: number[] = [];

  constructor(nums: number[]) {
    this.nums = nums;

    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        this.prefixNums.push(nums[i]);
      } else {
        this.prefixNums.push(nums[i] + this.prefixNums[i - 1]);
      }
    }
  }

  sumRange(left: number, right: number): number {
    if (left - 1 >= 0) {
      return this.prefixNums[right] - this.prefixNums[left - 1];
    } else {
      return this.prefixNums[right];
    }
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/*

naive solution: use math.sum on slice of array given by left and right.

*/
