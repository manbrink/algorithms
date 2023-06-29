function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];

  backtrack([], 0, 0);

  function backtrack(combination: number[], sum: number, start: number) {
    if (sum === target) {
      result.push([...combination]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(combination, sum + candidates[i], i);
      combination.pop();
    }
  }

  return result;
}

// function combinationSum(candidates: number[], target: number): number[][] {
//   let comboMap = new Map<string, number[]>();

//   for (let candidate of candidates) {
//     backtrack([candidate], candidate);
//   }

//   function backtrack(candidate: number[], sum: number) {
//     if (sum === target) {
//       let candidateKey = candidate.sort().join("");
//       if (!comboMap.has(candidateKey)) {
//         comboMap.set(candidateKey, candidate);
//       }
//     } else if (sum > target) {
//       return;
//     } else {
//       for (let nextNum of candidates) {
//         let newCandidate = [...candidate, nextNum];
//         let newSum = sum + nextNum;
//         backtrack(newCandidate, newSum);
//       }
//     }
//   }

//   return Array.from(comboMap.values());
// }

/*

'all unique combos': backtracking

-

for each decision of what number to add, candidates is the same (can repeat a num unlimited times)

  if current sum < target, add another number


*/
