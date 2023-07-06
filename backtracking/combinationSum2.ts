function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

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
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      combination.push(candidates[i]);
      backtrack(combination, sum + candidates[i], i + 1);
      combination.pop();
    }
  }

  return result;
}

// function combinationSum2(candidates: number[], target: number): number[][] {
//   let comboMap: Map<string, number[]> = new Map();
//   backtrack([], 0, 0);

//   function backtrack(combination: number[], sum: number, start: number) {
//     if (sum === target) {
//       let candidateKey = combination.sort().toString();

//       if (!comboMap.has(candidateKey)) {
//         comboMap.set(candidateKey, [...combination]);
//       }
//     }

//     if (sum > target) {
//       return;
//     }

//     for (let i = start; i < candidates.length; i++) {
//       combination.push(candidates[i]);
//       backtrack(combination, sum + candidates[i], i + 1);
//       combination.pop();
//     }
//   }

//   return Array.from(comboMap.values());
// }

/*

'candidates' and 'combinations' hints at backtracking

-

if starting num is > target, next.

keep track of current sum as we backtrack.  if it goes over target, backtrack.

in addition, pass the remaining numbers to the next backtrack call - it should be one less each time.

to prevent addition of duplicates, store potential candidates in a map: key = sorted candidate converted 
to string and value is candidate.

return values of map, which will be number[][]

*/
