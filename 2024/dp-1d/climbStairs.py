class Solution:
  dp_arr = { 1: 1, 2: 2}
  
  def climbStairs(self, n: int) -> int:
    if n in self.dp_arr:
      return self.dp_arr.get(n)
    else:
      self.dp_arr[n] = self.climbStairs(n - 2) + self.climbStairs(n - 1)
      return self.dp_arr[n]
    

'''
  1. num ways to reach nth step = nums ways to reach last step and step before that since we can take 1 or 2 steps

  2. climbStairs(n) = climbStairs(n - 1) + climbStairs(n - 2)

  3. start by storing base cases: n = 1, 1 way.  n = 2, 2 ways

  4. calculate new value if not in memoized dict, add to dict
'''