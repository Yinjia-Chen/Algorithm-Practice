/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 1.0 滑动窗口计数法：时间复杂度 O(n)  空间复杂度 O(1)
var findMaxAverage = function (nums, k) {
  let left = 0; // 左指针
  let right = k - 1; // 右指针
  let sum = 0; // 窗口内元素的和
  // 取到第一个窗口的元素和
  for (let i = left; i <= right; i++) {
    sum += nums[i]
  }


  let maxSum = sum; // 维护一个最大和

  // 调整滑动窗口
  for (let j = right + 1; j < nums.length; j++) {
    // 进入一个值加到sum上，出去一个值从sum去
    sum = sum + nums[j] - nums[left]
    maxSum = Math.max(maxSum, sum); // 比较更新最大和
    left++; // 移动左指针
  }
  // 最大和处理后得到最大平均数
  return (maxSum / k)
};

// 1.1 前缀和练习 前缀和数组存放的仍然是窗口区间元素和：时空复杂度 O(n)
var findMaxAverage = function (nums, k) {
  let avg = 0;
  const length = nums.length
  // 构建前缀和数组
  const prefix = new Array(length).fill(0);
  prefix[0] = nums[0];
  for (let i = 1; i < length; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }
  // 数组元素存在正负，取负无穷才是最小
  let maxSum = -Infinity; 
  // 只遍历到 n-k ，窗口大小为k，否则会越界
  for (let i = 0; i <= length - k; i++) {
    // i=0 时直接取 prefix[k-1]，否则减去 prefix[i-1]
    // 注意所有索引都要-1，否则会多包含一个元素进去
    const sum = i === 0
      ? prefix[k - 1]
      : prefix[i + k - 1] - prefix[i - 1];
    maxSum = Math.max(maxSum, sum);
  }
  return (maxSum / k)
}
