function productExceptSelf(nums: number[]): number[] {
  let result: number[] = new Array<number>(nums.length);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}

// function productExceptSelfOne(nums: number[]): number[] {
//   let prefix: number[] = [nums[0]];
//   let postfix: number[] = [nums[-1]];
//   let result: number[] = [];

//   for (let i = 1; i < nums.length; i++) {
//     prefix.push(nums[i] * nums[i - 1]);
//   }

//   for (let i = nums.length - 2; i >= 0; i--) {
//     postfix.push(nums[i] * nums[i - 1]);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let pre = prefix[i - 1] || 1;
//     let post = postfix[i + 1] || 1;

//     result.push(pre * post);
//   }

//   return result;
// }
