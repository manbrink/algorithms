const cache: number[] = [];

function climbStairsFaster(n: number): number {
  if (n <= 2) {
    return n;
  }

  if (!cache[n]) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }

  return cache[n];
}

function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
}

/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 1
Output: 1
Explanation: One way to the top
1. 1 step

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step

2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps

3. 2 steps + 1 step

Input: n = 4
Output: 3
Explanation: There are five ways to climb to the top.

* each method from n = 3 + 1 step *
1. 1 step + 1 step + 1 step + 1 step
2. 1 step + 2 steps + 1 step
3. 2 steps + 1 step + 1 step

* each method from n = 2 + 2 steps *
4. 2 steps + 2 steps
5. 1 steps + 1 steps + 2 steps

---

'how many distinct ways' sounds like permutations (DP)


DP recipe:

1. define subproblem / identify shared work: use identical problem on prefix of input
  
  climbStairs(n) = 
  
    - add 1 step to each previously generated method at n - 1
    - add 2 steps to each previously generated method at n - 2

2. state recursive relation: express F(i) in terms of F(1), ..., F(i - 1)

  climbStairs(3) = climbStairs(2) + climbStairs(1)

*/
