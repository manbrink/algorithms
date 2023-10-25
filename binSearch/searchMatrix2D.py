class Solution:
  def searchMatrix(self, matrix, target):
    if not matrix or not matrix[0]:
        return False
          
    rows, cols = len(matrix), len(matrix[0])
    row, col = 0, cols - 1
          
    while row < rows and col >= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] < target:
            row += 1
        else:
            col -= 1
        
    return False

'''
Input: matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]], target = 5

bin search all the rows
  s = 0
  e = len matrix - 1

  mid row = [3,6,9,16,22]

  if first el mid row <= 5 <= last el mid row:
    
    binsearch this row:

      5 is not present

  else if 5 >= first el prev row and 5 <= last el of prev:

    e = m - 1
  
  else if 5 >= first el next row and 5 <= last el of next:

    s = m + 1

return false
  


'''
        