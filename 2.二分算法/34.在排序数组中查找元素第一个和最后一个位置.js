// 二分查找解法：闭区间 时间复杂度O(log n) 空间复杂度O(1)
let lowerBound = (nums, target) => {
  let left = 0; // 闭区间左端点
  let right = nums.length - 1; // 闭区间右端点
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 二分核心：取中值下取整
    if (nums[mid] >= target) { // 中间值大于目标值：目标值在左半个区间，调整right
      right = mid - 1;
    } else { // 中间值小于目标值：目标值在右半个区间，调整left
      left = mid + 1;
    }
  }
  return left; // 最后结果：数组中第一个 >=target 的下标
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
  const start = lowerBound(nums, target); // 取出数组中第一个 >=target 的下标
  // 情况1：start越界，说明所有元素都小于target，不存在符合条件的元素，直接捕获
  // 情况2：此时不满足情况1，则一定存在大于等于target的元素，且第一次调用返回的是第一个 >=target 的元素下标，因此不等于target则证明不存在符合条件的元素
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1] // 认为不存在符合条件的元素
  }

  // 逻辑：最后一个 ==target 的位置 = 第一个 >target 的位置 - 1
  const end = lowerBound(nums, target + 1) - 1;
  return [start, end]
};


