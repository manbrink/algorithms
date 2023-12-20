class Solution:
  dp_arr = { 1: 1, 2: 2}
  
  def climbStairs(self, n: int) -> int:
    if n in self.dp_arr:
      return self.dp_arr.get(n)
    else:
      self.dp_arr[n] = self.climbStairs(n - 2) + self.climbStairs(n - 1)
      return self.dp_arr[n]
    

'''
  dp: 

  1. Identify Overlapping Subproblems:

    Recognize that the problem can be divided into smaller, overlapping subproblems.
    Each subproblem should represent a partial solution to the overall problem.

  2. Define a Recursive Formula:

    Express the solution to larger subproblems in terms of solutions to smaller subproblems.
    This formula captures the relationship between the subproblems and how they build towards the complete solution.
  
  3. Memoize or Tabulate Solutions:

    Memoization: Store previously calculated solutions to subproblems in a table or dictionary to avoid redundant calculations.
    Tabulation: Build a table iteratively from the bottom-up, filling in smaller subproblems first and using those values to compute larger subproblems.
  
  4. Solve the Initial Problem:

    Use the recursive formula and stored solutions to efficiently compute the answer to the original problem.

  -

  1. num ways to reach nth step = nums ways to reach last step and step before that since we can take 1 or 2 steps

  2. climbStairs(n) = climbStairs(n - 1) + climbStairs(n - 2)

  3. start by storing base cases: n = 1, 1 way.  n = 2, 2 ways

  4. calculate new value if not in memoized dict, add to dict

'''