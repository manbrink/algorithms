function findTargetSumWays(nums: number[], target: number): number {
  let sumMap: Map<string, number> = new Map();

  function countWays(index: number, sum: number): number {
    let key = `${index}-${sum}`;
    
    if (index === nums.length) {
      return sum === target ? 1 : 0;
    }
    
    if (sumMap.has(key)) {
      return sumMap.get(key);
    }
    
    let add = countWays(index + 1, sum + nums[index]);
    let subtract = countWays(index + 1, sum - nums[index]);
    sumMap.set(key, add + subtract);
    
    return sumMap.get(key);
  }

  return countWays(0, 0);
}

// function findTargetSumWays(nums: number[], target: number): number {
//   let res = 0;
//   let sumMap: Map<string, number> = new Map();
//   backtrack([], nums);
//   return res;

//   function backtrack(candidate: number[], remainingNums: number[]) {
//     if (candidate.length === nums.length) {
//       let candidateKey = candidate.toString();
//       let sum;

//       if (sumMap.has(candidateKey)) {
//         sum = sumMap.get(candidateKey);
//       } else {
//         sum = candidate.reduce((a, b) => {
//           return a + b;
//         });
//         sumMap.set(candidate.join(), sum);
//       }

//       if (sum === target) {
//         res += 1;
//       }

//       return;
//     }

//     backtrack([...candidate, remainingNums[0]], remainingNums.slice(1));

//     backtrack([...candidate, remainingNums[0] * -1], remainingNums.slice(1));
//   }
// }
