class Solution:
  def topKFrequent(self, nums: List[int], k: int) -> List[int]:
    freq = {}
    freq_arr = [[] for n in range(len(nums) +1)]
    
    for n in nums:
      freq[n] = freq.get(n, 0) + 1
      
    for num, count in freq.items():
      freq_arr[count].append(num)
      
    res = []
    for i in range(len(freq_arr) - 1, 0, -1):
      for n in freq_arr[i]:
        res.append(n)
        if len(res) == k:
          return res
    
"""

  we need to know:
  
    1. the frequencies
    2. how the frequencies compare to each other
    
  can we calculate how the current frequency compares to others in the same pass as we calculate
  the frequency itself?
  
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]

  why does returning in any order matter?

"""
