# 动态规划核心

## 适用场景

- 最终解依赖子问题最优解
- 存在需要重复计算的子问题

## 题干关键词

**最大、最小、最长、最少、方案数、能否**

## 思路模板

> 参考：[lc.2648 斐波那契数列](https://leetcode.cn/problems/generate-fibonacci-sequence/description/)

1. 创建 dp 数组 `dp[i]`
2. 判断状态转移方程：`dp[i] = dp[i-2] + dp[i-1]`
3. 确定边界：`dp[1] = 1`，`dp[2] = 1`
