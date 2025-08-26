# 算法专题：二分算法

资源地址：[分享丨【算法题单】二分算法（二分答案/最小化最大值/最大化最小值/第K小） - 讨论 - 力扣（LeetCode）](https://leetcode.cn/discuss/post/3579164/ti-dan-er-fen-suan-fa-er-fen-da-an-zui-x-3rqn/)



## 1. 概览
1. 思想：对按照一定规则排列的数组，重复取中点，提取满足要求的区间
2. 操作：核心算法 lowerBound.core.js
3. 适用场景：
4. 分类：
   1. 二分查找
   2. 二分答案
   3. 其他
5. 



## 2. 二分查找

1. 类型：全闭区间，开闭区间，全开区间
2. 操作：双指针 left & right，下取整 `mid = (left + right) / 2`，重复操作直到符合条件
   1. 全闭：`left = 0`   `right = arr.length - 1`
   2. 开闭：`left = -1`  `right = arr.length - 1`  or  `left = 0`  `right = arr.length`
   3. 全开：`left = -1`  `right = arr.length`
3. 