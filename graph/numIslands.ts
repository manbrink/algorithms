function numIslands(grid: string[][]): number {
  let rows = grid.length;
  let cols = grid[0].length;

  const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  let countIslands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (visited[i][j]) {
        continue;
      } else {
        if (grid[i][j] === "1") {
          countIslands += 1;
          dfs(i, j);
        } else {
          visited[i][j] = true;
        }
      }
    }
  }

  return countIslands;

  function dfs(row: number, col: number) {
    visited[row][col] = true;

    if (grid[row][col] === "1") {
      let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

      for (let [x, y] of directions) {
        let newRow = row + x;
        let newCol = col + y;

        // new cell must be in grid, unvisited, and part of the current island
        if (newRow >= 0 && newRow < rows &&
            newCol >= 0 && newCol < cols &&
            grid[newRow][newCol] === "1" &&
            !visited[newRow][newCol]
        ) {
          dfs(newRow, newCol);
        }
      }
    }
  }
};

/*

grid search problem, so graph dfs.

-

keep a 2d matrix of same dimensions as input that tracks visited cells.

keep count of islands.

-

iterate over each cell in the grid.

  if the cell has been visited:

    continue

  else:

    if the cell is land (1):

      increment count of islands

      dfs(cell)
    
    else:

      mark the cell as visited

-

dfs:

  mark cell as visited

  if cell is land:

    dfs each adjacent unvisited cell that's in the grid:

  else:

    return

-

in words:

we iterate over each cell.  

  if the cell has already been visited by an earlier dfs search, we continue.

  if the new cell is land, increment the count of islands and recursively explore the size of the island - marking all its cells and
  neighboring water cells as visited.  if the new cell is water, mark is explored and continue.


*/