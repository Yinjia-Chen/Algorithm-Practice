/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */

// 1.0 滑动窗口计数法：时间复杂度O(n) 空间复杂度 O(1)
var numOfSubarrays = function (arr, k, threshold) {
  const targetSum = k * threshold; // 目标和
  let res = 0; // 返回值
  let left = 0; // 左指针
  let right = left + k - 1; // 右指针
  let sum = 0; // 窗口和

  // 处理比较第一个窗口的窗口和
  for (let i = left; i <= right; i++){
    sum += arr[i];
  }
  if (sum >= targetSum) {
    res++;
  }

  // 从窗口右端开始遍历，右端进入累加，左端移出减去
  for (let i = right + 1; i < arr.length;i++){
    sum += arr[i];
    sum -= arr[left];
    left++; // 左指针右移
    if (sum >= targetSum) {
      res++;
    }
  }
  // 返回结果
  return res;
};

// 1.1 前缀和数组练习 前缀和数组存放的是前缀和：时空复杂度 O(n)
var numOfSubarrays = function (arr, k, threshold) {
  const length = arr.length // 数组长度
  const targetSum = k * threshold; // 目标和
  let res = 0;
  let prefix = new Array(length).fill(0); // 前缀和数组
  prefix[0] = arr[0]; // 重置前缀和

  // 构造前缀和数组
  for (let i = 1; i < length; i++){
    prefix[i] = prefix[i - 1] + arr[i];
  }

  // 检查比较第一个窗口和
  if (prefix[k - 1] >= targetSum) {
    res++;
  }
  for (let i = k; i < length; i++){
    let sum = prefix[i] - prefix[i - k];
    if (sum >= targetSum) {
      res++;
    }
  }
  
  // 返回结果
  return res;
};
