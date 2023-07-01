var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;

  let dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  console.log(dp);
  return dp[m][n];
};

console.log(longestCommonSubsequence("abcde", "ace"));
