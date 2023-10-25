class Solution:
  def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
      rows = len(matrix)
      cols = len(matrix[0]) if rows > 0 else 0
      s = 0
      e = rows * cols - 1

      while s <= e:
          m = (s + e) // 2
          mid_val = matrix[m // cols][m % cols]

          if mid_val == target:
              return True
          elif mid_val < target:
              s = m + 1
          else:
              e = m - 1

      return False


class Solution1:
  def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
    s = 0
    e = len(matrix) - 1
    target_row_idx = None

    # find row where target would be
    if len(matrix) == 1:
      target_row_idx = 0
    else:
      while s <= e:
        m = (s + e) // 2

        if target >= matrix[m][0] and target <= matrix[m][-1]:
          target_row_idx = m
          break
        elif target > matrix[m][-1]:
          s = m + 1
        elif target < matrix[m][0]:
          e = m - 1

    # check for target in the target row
    if target_row_idx is not None:
      s = 0
      e = len(matrix[target_row_idx]) - 1

      while s <= e:
        m = (s + e) // 2

        if target == matrix[target_row_idx][m]:
          return True
        elif target < matrix[target_row_idx][m]:
          e = m - 1
        elif target > matrix[target_row_idx][m]:
          s = m + 1

    return False

'''

[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 3
output = true

-

- sorted and O(log(m*n)) suggests bin search

-

start by partitioning rows until we have one row, then partition by that row's elements

-

if target >= midrow first el and target <= midrow last el:

  search this row

  how to go from rows to elements of rows?

else if target > midrow last el

  search right

else if target < midrow first el

  search left

'''
        