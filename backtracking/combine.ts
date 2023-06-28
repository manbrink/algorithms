function combine(n: number, k: number): number[][] {
  let combinations = [];

  function backtrack(start, combination) {
    if (combination.length === k) {
      combinations.push([...combination]);
      return;
    }

    for (let i = start; i < n + 1; i++) {
      combination.push(i);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }

  backtrack(1, []);

  return combinations;
}

/*

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

-

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

range of possible numbers: [1,2,3,4]

no duplicates: i.e. [1, 2] and [2, 1]

-
[1, 2, 3, 4]

combine 1 with all the others:

[[1, 2], [1, 3], [1, 4]]

combine 2 with all after 2:

[[2, 3], [2, 4]]

combine 3 with all after:

[[3, 4]]

just works for k = 2...

k = 3:

[[1, 2, 3], [1, 3, 4]]

[[2, 3, 4], [2, 1, 4]]

*/
