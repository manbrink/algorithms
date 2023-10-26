class Solution:
  def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
      left, right = 0, len(arr) - 1
          
      while right - left >= k:
          if abs(arr[left] - x) > abs(arr[right] - x):
              left += 1
          else:
              right -= 1
          
      return arr[left:right + 1]


# arr = [1,2,3,4,5]
# k = 4
# x = 3
# ans = [1,2,3,4]

# class Solution:
#   def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
#       s = 0
#       e = len(arr) - 1

#       # get idx of x or 0 / len(arr) -1 if not present
#       while s <= e:
#           m = (s + e) // 2

#           if arr[m] == x:
#               break
#           elif arr[m] < x:
#               s = m + 1
#           elif arr[m] > x:
#               e = m - 1

#       if m == 0:
#           return arr[0:k]
#       elif m == len(arr) - 1:
#           return arr[len(arr) - k:]
#       else:
#           l = m
#           r = m

#           while len(arr[l:r+1]) < k:
#               num_l = arr[l]
#               num_r = arr[r]

#               if l > 0 and abs(num_l - x) < abs(num_r - x) or (abs(num_l - x) == abs(num_r - x) and num_l < num_r):
#                   l -= 1
#               elif r < len(arr) - 1:
#                   r += 1

#           return arr[l:r+1]


'''
arr = [1,2,3,4,5]
k = 4
x = 3

bin search until we get the idx of x.  this will be an idx in the array, 0, or len(arr) - 1.

if idx is at either end, take k values from that end.

otherwise, create pointers for left and right element, and a var to decrement starting at k.

  |a - x| < |b - x|

  or

  |a - x| == |b - x| and a < b

  then add a, else add b.  shift the pointers. decrement k.


'''