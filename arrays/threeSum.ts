function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // sort the input array
  const result: number[][] = []; // initialize the result array

  for (let i = 0; i < nums.length - 2; i++) {
    // iterate through the array
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    let j = i + 1; // initialize the left pointer
    let k = nums.length - 1; // initialize the right pointer

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      // check if we found a triplet that sums to zero
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        while (j < k && nums[j] === nums[j + 1]) j++; // skip duplicates
        while (j < k && nums[k] === nums[k - 1]) k--; // skip duplicates
        j++; // move the left pointer to the right
        k--; // move the right pointer to the left
      } else if (sum < 0) {
        // if the sum is less than zero, move the left pointer to the right
        j++;
      } else {
        // if the sum is greater than zero, move the right pointer to the left
        k--;
      }
    }
  }

  return result; // return the result array
}

// function threeSum(nums: number[]): number[][] {
//   const l = nums.length;
//   let numMap = new Map<string, number[]>();

//   for (let i = 0; i < l; i++) {
//     for (let j = i + 1; j < l; j++) {
//       for (let k = j + 1; k < l; k++) {
//         let numOne = nums[i];
//         let numTwo = nums[j];
//         let numThree = nums[k];

//         if (numOne + numTwo + numThree === 0) {
//           let sortedNums = [numOne, numTwo, numThree].sort();
//           let sortedNumsStr = sortedNums.join("");

//           if (!numMap.get(sortedNumsStr)) {
//             numMap.set(sortedNumsStr, sortedNums);
//           }
//         }
//       }
//     }
//   }

//   return Array.from(numMap.values());
// }

/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

-

better way than just 3 loops?  memoization? sorting?

-

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

result = []

i = 0
j = 1
k = 2

// sort values before adding to resMap
resMap = {
  [-1, 0, 1]: true
}

i = 0
j = 3
k = 4

resMap = {
  [-1, 0, 1]: true,
  [-1, -1, 2]: true
}

return result.keys()

-

Input: nums = [0,1,1]
Output: []



*/
