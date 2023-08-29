function uniquePaths(m: number, n: number): number {
  let dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

/*

make m * n dp grid.  fill first column and first row with all 1's.

iterate from second row, second column to end for each row.  set each cell's
value to sum of cell above it and cell to the left.

return cell [m - 1][n - 1]

*/