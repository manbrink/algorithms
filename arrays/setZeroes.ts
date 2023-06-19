/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let placeholder = null; // placeholder for matrix[0][0]

  // indicate rows and columns to 0 out
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0; // mark column to be 0'd

        if (i === 0) {
          placeholder = 0;
        } else {
          matrix[i][0] = 0; // mark row to be 0'd
        }
      }
    }
  }

  // 0 the marked cells
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // handle first column
  if (matrix[0][0] === 0) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  // handle first row
  if (placeholder === 0) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }
}

/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

-

i = 0 [1,1,1] 
j = 0 no change
j = 1 no change
j = 2 no change

i = 1 [1,0,1] 
j = 0 no change
j = 1 0 found at [1][1]

  [0][1] = 0 // all previous rows at column j = 0
  [1][0] = 0 // all previous columns at row i = 0
  [2][1] = 0 // all subsequent rows at column j = 0
  [1][2] = 0 // all subsequent columns at row i = 0

j = 2 no change


-

avoid setting everything to 0:

  if we find a 0, the rest of the row will be 0 after operation - so increment i.

  rest of column 



*/
