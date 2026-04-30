function generate(numRows: number): number[][] {
  let dp = [[1]]; // 边界
  // 状态转移方程 dp[i] = [1, dp[i-1][j-1]+dp[i-1][j], 1]
  // dp[i] = [1];
  // for  j = 1, j <= dp[i-1].length - 1  dp[i].push(dp[i-1][j-1] + dp[i-1][j])
  // dp[i].push(1);
  for (let i = 1; i < numRows; i++) {
    dp[i] = [1];
    //这里不能用 let 会报错重复声明
    for (let j = 1; j <= dp[i - 1].length - 1; j++) {
      dp[i].push(dp[i - 1][j - 1] + dp[i - 1][j]);
    }
    dp[i].push(1);
  }
  return dp;
}
