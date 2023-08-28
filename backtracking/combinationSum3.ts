function combinationSum3(k: number, n: number): number[][] {
  let combinations: Map<string, number[]> = new Map();
  let nums = Array.from({length: 9}, (_, i) => i + 1);

  backtrack(0, 0, [], nums);

  return Array.from(combinations.values());

  function backtrack(currentSum: number, depth: number, currentCombo: number[], nums: number[]) {
    if (currentSum > n || depth > k) {
      return;
    }

    if (currentSum === n && depth === k) {
      const comboKey = currentCombo.sort((a, b) => a - b).toString();
      if (!combinations.has(comboKey)) {
        combinations.set(comboKey, [...currentCombo]);
      }
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      // Ensure that you're not using the same number again
      backtrack(currentSum + num, depth + 1, [...currentCombo, num], nums.slice(i + 1));
    }
  }
}


// function combinationSum3(k: number, n: number): number[][] {
//   let combinations: Map<string, number[]> = new Map();
//   let nums = Array.from({length: 9}, (_, i) => i + 1);

//   backtrack(0, 0, [], nums);

//   return Array.from(combinations.values());

//   function backtrack(currentSum: number, depth: number, currentCombo: number[], nums: number[]) {
//     if (nums.length === 0) {
//       return;
//     }
    
//     let newSum = currentSum += nums[0];
//     currentCombo.push(nums[0]);
//     depth += 1;

//     let comboKey = currentCombo.sort().toString();
//     if (newSum === n && depth === k && !combinations.has(comboKey)) {
//       combinations.set(comboKey, currentCombo);
//     }

//     if (newSum < n && depth < k) {
//       for (let num of nums.slice(1)) {
//         backtrack(newSum, depth, currentCombo, nums.slice(1));
//       }
//     }
//   }
// };

