class Solution:
  def minCostClimbingStairs(self, cost: List[int]) -> int:
    cost.extend([0, 0])
    
    for i in range(len(cost) - 3, -1, -1):
      original_cost = cost[i]
      cost_one_step = original_cost + cost[i + 1]
      cost_two_step = original_cost + cost[i + 2]
      cost[i] = min(cost_one_step, cost_two_step)

    return min(cost[0:2])

'''

1. Identify Overlapping Subproblems:

  [10, 15, 20]
  ans = 15
  
  option 1: start at 10, 2 steps then 1 step = 30
  option 1: start at 15, take 2 steps = 15
  
  [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
  ans = 6
  
  if 1 or 2 steps puts you 'at the top', take that many
  
    otherwise, take number of steps that lands on step with lower cost

2. Define a Recursive Formula:

3. Memoize or Tabulate Solutions:

  base case: [x, y] -> {[x, y]: min(x, y)} b/c fewest elements you can have is 2.  to reach idx 2 (top), you could pay for cost[0]
  and take 2 steps, or pay for cost[1] and take 1 step.
  
  {[10, 15]: 10, [10, 15, 20]: 15}

4. Solve the Initial Problem:

'''