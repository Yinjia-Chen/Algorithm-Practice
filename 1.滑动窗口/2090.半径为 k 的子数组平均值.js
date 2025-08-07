/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 1.0 滑动窗口计数法：时空复杂度 O(n)
var getAverages = function (nums, k) {
  const length = nums.length;
  const avgs = new Array(length).fill(-1);
  const windowLength = 2 * k + 1 // 滑动窗口元素个数
  // 如果窗口大小大于数组长度，直接返回全 -1
  if (windowLength > length) return avgs;

  let left = 0; // 第一个窗口的左指针
  let right = 2 * k; // 第一个窗口的右指针
  let sum = 0; // 前缀和
  // 第一个窗口的和
  for (let i = left; i <= right; i++) {
    sum += nums[i];
  }
  avgs[k] = Math.floor(sum / (windowLength));

  // 索引从 k 到 length-1-k
  for (let i = k + 1; i <= length - 1 - k; i++) {
    right++;
    sum += nums[right];
    sum -= nums[left];
    left++;
    avgs[i] = Math.floor(sum / (windowLength));
  }
  return avgs
};

// 1.1 前缀和数组：时空复杂度O(n) 定义的常量个数更少
var getAverages = function (nums, k) {
  const n = nums.length;
  const avgs = new Array(n).fill(-1);
  const prefix = new Array(n).fill(0); // 前缀和数组
  const windowLength = 2 * k + 1 // 滑动窗口元素个数
  // 如果窗口大小大于数组长度，直接返回全 -1
  if (windowLength > n) return avgs;

  // 构造前缀和数组
  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  // 因为要做减法，并非传统的n+1长度的前缀和数组，所以先处理第一个数据
  avgs[k] = Math.floor(prefix[2 * k] / windowLength);
  for (let i = k + 1; i <= n - k - 1; i++) {
    avgs[i] = Math.floor((prefix[i + k] - prefix[i - k - 1]) / windowLength)
  }
  return avgs
}