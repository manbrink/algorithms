/**
 Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - i - 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i]; // bottom left -> top right.  subtracting j moves the rotating square inward. -1 for 0 indexing.
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]; // bottom right -> bottom left
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]; // top right -> bottom right
      matrix[j][n - i - 1] = temp; // top left -> top right
    }
  }
}

// function rotate(matrix: number[][]): void {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       let k = matrix[i].length - i - 1;
//       let temp = matrix[j][k];
//       matrix[j][k] = matrix[i][j];
//       matrix[i][j] = temp;
//     }
//   }
// }

/*

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

i = 0
j = 0 [0][0] -> [0][2] or [j][len(matrix[i] - i + 1)]

  temp = [j][len(matrix[i] - i + 1)]
  [j][len(matrix[i] - i + 1)] = [i][j]
  [i][j] = temp

j = 1 [0][1] -> [1][2]
j = 2 [0][2] -> [2][2]

i = 1
[1][0] -> [0][1] or [j][len(matrix[i] - i + 1)]
[1][1] -> [1][1]
[1][2] -> [2][1]

i = 2
[2][0] -> [0][0] or [j][len(matrix[i] - i + 1)]
[2][1] -> [1][0]
[2][2] -> [2][0]

*/
