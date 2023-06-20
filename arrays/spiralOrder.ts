function spiralOrder(matrix: number[][]): number[] {
  let res = [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    // top row
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j]);
    }
    top++;

    // right column
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // bottom row
    if (top <= bottom) {
      // prevent duplicate traversal
      for (let j = right; j >= left; j--) {
        res.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // left column
    if (left <= right) {
      // prevent duplicate traversal
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}

/*

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

[0][0]
[0][1]
[0][2]

[1][2]
[2][2]

[2][1]
[2][0]

[1][0]

[1][1]

-

dir = left

going right: while i < matrix[0].length
going down: while j < matrix.length
going left: while j < matrix[0].length
going up: while j < matrix.length

rows = matrix.length
cols = matrix[0].length

decrement rows and cols at each iteration?  change dir at end of each iteration?

*/
