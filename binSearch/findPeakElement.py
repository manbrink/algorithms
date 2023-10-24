class Solution:
    def findPeakElement(self, nums):
        if len(nums) == 1:
            return 0

        left, right = 0, len(nums) - 1

        while left < right:
            mid = (left + right) // 2

            if nums[mid] < nums[mid + 1]:
                left = mid + 1
            else:
                right = mid

        return left


# class Solution:
#     def findPeakElement(self, nums: List[int]) -> int:
#         if (len(nums) == 1):
#             return 0

#         s = 0
#         e = len(nums) - 1

#         while s < e:
#             m = (s + e) // 2

#             if (m == 0 and nums[m] > nums[m + 1]):
#                 return m
#             elif (m == 0 and nums[m] < nums[m + 1]):
#                 s = m + 1
#             elif (m == len(nums) - 1 and nums[m] > nums[m - 1]):
#                 return m
#             elif (m == len(nums) - 1 and nums[m] < nums[m - 1]):
#                 e = m - 1
#             elif (nums[m] > nums[m - 1] and nums[m] > nums[m + 1]):
#                 return m
#             elif (nums[m - 1] > nums[m + 1]):
#                 e = m - 1
#             elif (nums[m - 1] <= nums[m + 1]):
#                 s = m + 1

#         return s


'''
[2, 1, 2]

output: 0 or 2

s = 0
e = 2
m = 1



-

peak element = el greater than each neighbor.  if more than one peak, return idx of any of them.

O(logn) .. so binsearch

-

Input: nums = [1,2,1,3,5,6,4]
Output: 5

s = 0
e = 6
m = 3

3 > 1 && 3 > 5 == false

take the greater element?

s = 4
e = 6
m = 6

6 > 5 && 6 > 4 == true, return m

-

Input: nums = [1,2,3,1]
Output: 2

s = 0
e = 3
m = 1

2 > 1 && 2 > 3 == false

3 > 1, go right

s = 2
e = 3
m = 2

3 > 2 && 3 > 1 == true, return m

-

Input: nums = [1, 2]
Output: 1

s = 0
e = 1
m = 0



'''
