function climbStairs(n: number): number {
  let dp = [1, 2]; // 边界：dp[0] = 1, dp[1] = 2
  for (let i = 2; i < n; i++) {
    // 走到第 i 个台阶有 dp[i - 1] + dp[i - 2] 种方法
    dp[i] = dp[i - 1] + dp[i - 2]; // 状态转移方程
  }
  return dp[n - 1];
};