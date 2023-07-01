// binary search basically eliminates 1/4 of the matrix at each iteration
function searchMatrixBinary(matrix: number[][], target: number): boolean {
  let ROWS = matrix.length;
  let COLS = matrix[0].length;

  function search(
    startRow: number,
    endRow: number,
    startCol: number,
    endCol: number
  ): boolean {
    if (startRow > endRow || startCol > endCol) {
      return false;
    }

    // 'divide'
    let midRow = Math.floor((startRow + endRow) / 2);
    let midCol = Math.floor((startCol + endCol) / 2);
    let midNum = matrix[midRow][midCol];

    if (midNum === target) {
      return true;
    }

    if (midNum > target) {
      // target is smaller than our mid partition
      return (
        // 'conquer + combine'
        search(startRow, midRow - 1, startCol, endCol) || // top half
        search(midRow, endRow, startCol, midCol - 1) // left half
      );
    } else {
      // target is greater than our mid partition
      return (
        // 'conquer + combine'
        search(startRow, midRow, midCol + 1, endCol) || // right half
        search(midRow + 1, endRow, startCol, endCol) // bottom half
      );
    }
  }

  return search(0, ROWS - 1, 0, COLS - 1);
}

// this traverses in a diagonal fashion across the whole matrix, less efficient than binSearch method
function searchMatrix(matrix: number[][], target: number): boolean {
  let ROWS = matrix.length;
  let COLS = matrix[0].length;
  let exists = false;

  search(0, COLS - 1);

  function search(currentRow: number, currentCol: number) {
    let currentNum = matrix[currentRow][currentCol];

    if (currentNum === target) {
      exists = true;
      return;
    }

    if (target < currentNum && currentCol > 0) {
      search(currentRow, currentCol - 1);
    } else if (currentRow < ROWS - 1) {
      search(currentRow + 1, currentCol);
    }
  }

  return exists;
}

/*

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

-

Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true

-

start at [0, 0]

5 != 1 and 5 > 4, so go right

5 != 4 but 5 < 7, go down

5 === 5, return true

-

Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20

20 != 1 and 20 > 4, right
20 != 1 and 20 > 7, right
20 != 1 and 20 > 11, right
20 != 1 and 20 > 15, but no more right elements - so go down

-

generalize more...

if target === current num, return true

we can search right or down at each instance:

  if target > num and right cell exists, search right

  if target > num and bottom cell exists, search bottom

*/
