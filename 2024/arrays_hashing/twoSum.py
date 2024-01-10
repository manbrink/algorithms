class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    num_indices = dict()
    
    for i, num in enumerate(nums):
      complement = target - num
      if complement in num_indices:
        return [i, num_indices[complement]]
      num_indices[num] = i
      
"""
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
"""
        