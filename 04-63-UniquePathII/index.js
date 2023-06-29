function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      db[i][0] = 0;
      break;
    } else {
      dp[i][0] = 1;
    }
  }

  for (let j = 0; j < m; j++) {
    if (obstacleGrid[0][j] === 1) {
      db[0][j] = 0;
      break;
    } else {
      dp[0][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}

const obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
const numPaths = uniquePathsWithObstacles(obstacleGrid);
console.log(numPaths); // Output: 2
