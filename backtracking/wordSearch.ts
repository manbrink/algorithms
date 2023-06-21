function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const visited: boolean[][] = [];

  for (let i = 0; i < rows; i++) {
    visited[i] = [];
    for (let j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        if (backtrack(i, j, 0)) {
          return true;
        }
      }
    }
  }

  function backtrack(row: number, col: number, index: number): boolean {
    if (index === word.length) {
      return true;
    }

    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      visited[row][col] ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    visited[row][col] = true;

    const directions = [
      [0, 1], // right
      [0, -1], // left
      [1, 0], // down
      [-1, 0], // up
    ];

    for (const [dx, dy] of directions) {
      if (backtrack(row + dx, col + dy, index + 1)) {
        return true;
      }
    }

    visited[row][col] = false;

    return false;
  }

  return false;
}

// function exist(board: string[][], word: string): boolean {
//   let rows = board.length;
//   let cols = board[0].length;
//   let exists = false;
//   let visited = [];

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (board[i][j] === word[0]) {
//         if (word.length === 1) {
//           exists = true;
//         }

//         visited.push([i, j]);

//         exists = backtrack(i, j, word.slice(1));
//       }
//     }
//   }

//   function backtrack(
//     lastRow: number,
//     lastCol: number,
//     subWord: string
//   ): boolean {
//     if (subWord === "") {
//       return true;
//     }

//     let nextCh = subWord[0];

//     // check neighboring cells (top, right, bottom, left)
//     if (
//       board[lastRow - 1][lastCol] === nextCh &&
//       !visited.includes([lastRow - 1, lastCol])
//     ) {
//       visited.push([lastRow - 1, lastCol]);
//       backtrack(lastRow - 1, lastCol, subWord.slice(1));
//     } else if (
//       board[lastRow][lastCol + 1] === nextCh &&
//       !visited.includes([lastRow, lastCol + 1])
//     ) {
//       visited.push([lastRow, lastCol + 1]);
//       backtrack(lastRow, lastCol + 1, subWord.slice(1));
//     } else if (
//       board[lastRow + 1][lastCol] === nextCh &&
//       !visited.includes([lastRow + 1, lastCol])
//     ) {
//       visited.push([lastRow + 1, lastCol]);
//       backtrack(lastRow + 1, lastCol, subWord.slice(1));
//     } else if (
//       board[lastRow][lastCol - 1] === nextCh &&
//       !visited.includes([lastRow, lastCol - 1])
//     ) {
//       visited.push([lastRow, lastCol - 1]);
//       backtrack(lastRow, lastCol - 1, subWord.slice(1));
//     } else {
//       visited = [];
//       return false;
//     }
//   }

//   return exists;
// }

/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once.

-

use backtracking to find permutations to construct the word.

- scan matrix for first letter of word

  - if found, start backtracking search (recursive)

    - if word length is 1, return true

    - if word is null (from slicing), return true

    - if any neighboring cells except for last cell contain the next ch;

      - recurse with params (that cell [i][j], word.slice(i))

      - else 


*/
