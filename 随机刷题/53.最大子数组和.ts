// 1.0 思路:前缀和+双指针,双指针遍历前缀和数组，首尾指针指向的前缀和做减法，得到各个子数组的和，同时比较并记录已出现的最大子数组和，再与前缀和中的最大值比较得出最大子数组和
// 问题：时间复杂度太高 双指针遇到巨量大数据 超时
function maxSubArray(nums: number[]): number {
  // 如果数组只有一个元素，
  let maxSum: number = nums[0];
  if (nums.length == 1) return maxSum;
  // 定义前缀和数组
  let preSum: Array<number> = new Array();
  // 前缀和数组初始化
  preSum[0] = nums[0]
  // 前缀和数组更新
  for (let i = 1; i < nums.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i];
  }


  // 遍历前缀和数组，先找出最大的前缀和，记录
  for (const num of preSum) {
    maxSum = Math.max(maxSum, num)
  }
  // 双指针，左指针右移到右指针左侧，左指针重置，右指针左移，找出最大值
  // 过渡值curMax
  let curMax: number = -Infinity; // 问题:若数组元素小于0，curMax=0则出现bug
  for (let right = preSum.length - 1; right > 0; right--) {
    for (let left = 0; left < right; left++) {
      curMax = Math.max(curMax, (preSum[right] - preSum[left]));
    }
  }
  return maxSum = Math.max(curMax, maxSum)
};


// 2.0 动态规划:
function maxSubArray(nums: number[]): number {
    if (nums.length === 0) return 0;
    let maxSum = nums[0]; // 最大和
    let currentSum = nums[0]; // 当前和
    for (let i = 1; i < nums.length; i++) { // 从第二个元素开始遍历
        currentSum = Math.max(nums[i], currentSum + nums[i]); // ++,+-,--,-+ 动态规划核心
        maxSum = Math.max(maxSum, currentSum); // 比较更新记录最大和
    }
    return maxSum;
}

// 3.0 贪心算法：找出每一个阶段的最优解，促使完成最优结果 时间复杂度O(n)
// 当每一次的「之前和」小于0，舍弃之前子数组，大于0，累加当前值，并更新记录最大和
function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0;
  let preSum = nums[0]; // 之前和
  let maxSum = nums[0]; // 最大和
  for (let i = 1; i < nums.length; i++) { // 从第二个元素开始遍历
    const curNum = nums[i]; // 当前值
    preSum = preSum < 0 ? curNum : preSum + curNum; // 之前和小于0，丢弃之前所有子数组，之前和大于0，累加当前数
    maxSum = Math.max(maxSum, preSum); // 比较更新记录最大和
  }
  return maxSum;
}
