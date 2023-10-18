class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums) == 1 or nums[0] < nums[-1]:
            return nums[0]

        s = 0
        e = len(nums) - 1

        while s < e:
            m_idx = (s + e) // 2
            c_num = nums[m_idx]

            if c_num > nums[e]:
                s = m_idx + 1
            else:
                e = m_idx

        return nums[s]


'''

  O(logn) time constraint and fact that nums sorted asceing: probably binary search

  return min element:

    for each binSearch: partition towards smaller element.  if neither is smaller, 
    return the current element.


  

'''
