var climbStairs = function (n) {
  if (n < 0) return 0;
  if (n === 1) return 1;

  let dp = [];
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};

console.log(climbStairs(5));
