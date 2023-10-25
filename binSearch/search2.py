class Solution:
  def search(self, nums: List[int], target: int) -> bool:
      if len(nums) == 1:
          return nums[0] == target

      s = 0
      e = len(nums) - 1

      while s <= e:
          m = (s + e) // 2

          if nums[m] == target:
              return True

          while s < m and nums[s] == nums[m]:  # skip duplicates from the left
              s += 1

          if nums[s] <= nums[m]:  # the left side is sorted
              if nums[s] <= target <= nums[m]:
                  e = m - 1
              else:
                  s = m + 1
          else:  # the right side is sorted
              if nums[m] <= target <= nums[e]:
                  s = m + 1
              else:
                  e = m - 1

      return False



'''

[1,1,1,1,1,1,1,1,1, 1,1,1,1,2,1,1,1,1,1], target = 2

Input: nums = [5,6,0,0,1,2,2], target = 2
Output: true

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

Input: nums = [2,5,6,0,0,1,2], target = 5
Output: true

-
Input: nums = [2,5,6,0,0,1,2], target = 2
Output: true

Input: nums = [2,5,6,6,6,1,2], target = 5
Output: true

Input: nums = [2,5,6,6,6,1,2], target = 3
Output: false

'''
        