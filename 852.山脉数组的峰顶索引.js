/**
 * @param {number[]} arr
 * @return {number}
 */

// 1.0 简单遍历更新峰顶，不更新立即返回：时间复杂度O(n) 空间复杂度O(1)
var peakIndexInMountainArray = function (arr) {
  let top = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= top) {
      top = arr[i];
    } else {
      // 先自增再校验，当前值已经不是峰顶，上一个才是，因此-1
      index = i - 1
      break;
    }
  }
  return index
};

// 2.0 二分查找优化：时间复杂度 O(logN) 空间复杂度 O(1)
var peakIndexInMountainArray = function (arr) {
  const length = arr.length;
  // 山脉数组特性:单调增->单调减，峰顶一定不在数组边界
  let left = 1, right = length - 2;
  let top = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // 如果 mid 比右侧大，说明当前处于单调减
    if (arr[mid] > arr[mid + 1]) {
      top = mid; // 假设当前是峰顶，后续循环中更新
      // 二分查找思想：如果当前不是峰顶，那么峰顶一点在左侧，缩小右边界将中点像左侧移动
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return top;
}