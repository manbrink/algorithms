function sortedSquares(nums: number[]): number[] {
  let newArr = [];
  let i = 0;
  let k = nums.length - 1;

  while (i !== k) {
    const sOne = nums[i] ** 2;
    const sTwo = nums[k] ** 2;

    if (sOne >= sTwo) {
      newArr.unshift(sOne);
      i += 1;
    } else {
      newArr.unshift(sTwo);
      k -= 1;
    }
  }

  newArr.unshift(nums[i] ** 2);

  return newArr;
}

/*

two pointers: beginning and end

take square of elements at i and k.  shift larger one onto front of new array, decrement the corresponding index.

iterate with while loop until i === k.  after while loop, push square of element at last index.

nums = [-4,-1,0,3,10]
newArr = [100]

i = 0, k = 4

nums = [-4,-1,0,3,10]
newArr = [16, 100]

i = 0, k = 3

nums = [-4,-1,0,3,10]
newArr = [9, 16, 100]

i = 1, k = 3

nums = [-4,-1,0,3,10]
newArr = [1, 9, 16, 100]

i = 1, k = 2

nums = [-4,-1,0,3,10]
newArr = [0, 1, 9, 16, 100]

i = 2, k = 2


*/
