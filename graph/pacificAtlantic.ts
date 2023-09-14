function pacificAtlantic(heights: number[][]): number[][] {
  const result: number[][] = [];
  const rows = heights.length;
  const cols = heights[0].length;

  const canFlowToPacific: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const canFlowToAtlantic: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));

  for (let i = 0; i < rows; i++) {
    dfs(i, 0, canFlowToPacific); // iterate left edge. see if we can flow to left pacific.
    dfs(i, cols - 1, canFlowToAtlantic); // iterate right edge.
  }

  for (let j = 0; j < cols; j++) {
    dfs(0, j, canFlowToPacific); // iterate top edge.  see if we can flow to top pacific.
    dfs(rows - 1, j, canFlowToAtlantic); // iterate bottom edge
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (canFlowToPacific[i][j] && canFlowToAtlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;

  function dfs(row: number, col: number, canFlowTo: boolean[][]): void {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    canFlowTo[row][col] = true;

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 && newRow < rows &&
        newCol >= 0 && newCol < cols &&
        heights[newRow][newCol] >= heights[row][col] &&
        !canFlowTo[newRow][newCol]
      ) {
        dfs(newRow, newCol, canFlowTo);
      }
    }
  }
}



// function pacificAtlantic(heights: number[][]): number[][] {
//   let result: number[][] = new Array();
//   let midI = Math.floor(heights.length / 2)
//   let midJ = Math.floor(heights[0].length / 2)

//   dfs(midI, midJ);

//   return result;

//   function dfs(row: number, col: number) {
//     // we have reached the ocean
//     if (row <= 0 || row >= heights.length - 1 || col <= 0 || col >= heights[0].length - 1) {
//       return true;
//     }

//     let pathUp;
//     if (row - 1 >= 0 && heights[row][col] >= heights[row - 1][col]) {
//       pathUp = dfs(row - 1, col);
//     } else {
//       pathUp = false;
//     }

//     let pathLeft;
//     if (row - 1 >= 0 && heights[row][col] >= heights[row][col - 1]) {
//       pathLeft = dfs(row, col - 1);
//     } else {
//       pathLeft = false;
//     }

//     let pathRight;
//     if (col + 1 <= heights[0].length - 1 && heights[row][col] >= heights[row][col + 1]) {
//       pathRight = dfs(row, col + 1);
//     } else {
//       pathRight = false;
//     }

//     let pathDown;
//     if (row + 1 <= heights.length - 1 && heights[row][col] >= heights[row + 1][col]) {
//       pathDown = dfs(row + 1, col);
//     } else {
//       pathDown = false;
//     }

//     if ((pathUp || pathLeft) && (pathRight || pathDown)) {
//       result.push([row, col])
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

/*

for a cell to be a valid member of the result set:

  - cell to right or below must be out of range (ocean)

    OR
  
    all cells to right must be <= it 
    
    OR 
    
    all cells below it must be <= it

  AND

  cell to left or above must be out of range (ocean)

    OR

    all cells above must be <= it 
    
    OR 
    
    all cells to left must be <= it


how to use bfs / dfs for the search:

  - different recursive call for each of the 4 directions?


way to store info to speed up?



*/