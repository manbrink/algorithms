# more optimal since we don't care about actual frequency, just inclusion
# beats 98% vs 82% of leetcode submissions with dictionary
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    hashset = set()
    
    for num in nums:
      if num in hashset:
        return True
      hashset.add(num)
        
    return False
  
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    frequency = {}
    
    for num in nums:
      if num in frequency:
        return True
      else:
        frequency[num] = 1
        
    return False

'''
  naive: O(n^2) where n = len(nums).  visit each num, and each other num
  
  O(n) time and space: use frequency hash. increment frequency for each element as you 
  encounter it.  if frequency is not 0 for an element, return true.  return false by default.
'''
        