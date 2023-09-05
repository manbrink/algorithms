function canPartition(nums: number[]): boolean {
  let totalSum = nums.reduce((total, num) => total + num);

  if (totalSum % 2 !== 0) {
    return false;
  }

  let targetSum = totalSum / 2;

  let sumSet = new Set<number>();
  sumSet.add(0);
  
  for (let i = 0; i < nums.length; i++) {
    let newSums: number[] = [];

    sumSet.forEach((sum) => {
      newSums.push(sum + nums[i]);
    });
    
    newSums.forEach((newSum) => {
      sumSet.add(newSum);
    });
  }
  
  return sumSet.has(targetSum);
}

// function canPartition(nums: number[]): boolean {
//   if (nums.length === 0) {
//     return false;
//   }

//   let rPartition: number[] = new Array();
//   let lPartition: number[] = new Array();
//   let curSumR = 0;
//   let curSumL = 0;

//   rPartition.push(nums[nums.length - 1]);
//   curSumR = nums[nums.length - 1];


//   for (let i = nums.length - 2; i >= 0; i--) {
//     if (nums[i] + curSumR > nums[i] + curSumL) {
//       lPartition.push(nums[i])
//       curSumL += nums[i];
//     } else {
//       rPartition.push(nums[i])
//       curSumR += nums[i];
//     }
//   }

//   return curSumL === curSumR;
// };