// DFS
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const startingColor = image[sr][sc];
  const ROWS = image.length;
  const COLS = image[0].length;

  if (startingColor === color) {
    return image;
  }

  fillDFS(sr, sc);

  return image;

  function fillDFS(row: number, col: number) {
    if (
      row < 0 ||
      col < 0 ||
      row >= ROWS ||
      col >= COLS ||
      image[row][col] !== startingColor
    ) {
      return;
    }

    image[row][col] = color;

    fillDFS(row - 1, col); // top
    fillDFS(row + 1, col); // bottom
    fillDFS(row, col - 1); // left
    fillDFS(row, col + 1); // right
  }
}

// BFS
function floodFillIterative(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const startingColor = image[sr][sc];
  const ROWS = image.length;
  const COLS = image[0].length;

  if (startingColor === color) {
    return image;
  }

  let q = [[sr, sc]];
  while (q.length > 0) {
    let p = q.shift();
    let row, col;
    [row, col] = [p[0], p[1]];

    if (
      0 <= row &&
      row < ROWS &&
      0 <= col &&
      col < COLS &&
      image[row][col] === startingColor
    ) {
      image[row][col] = color;
      q.push([row - 1, col]); // top
      q.push([row, col + 1]); // right
      q.push([row + 1, col]); // bottom
      q.push([row, col - 1]); // left
    }
  }

  return image;
}

/*

the sort of 'cascading' nature suggest a type of recursion/dfs/bfs.

4-directionally: can only move up/down/left/right

subproblem:

  change the value of cell to fill value

  from current element, check up/down/left/right cells:

    - if their value is == starting value, change their value to fill value

*/
