/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0; // 闭区间左端点
  let right = nums.length - 1; // 闭区间右端点

  while (left <= right) { // <= 保证所有元素都遍历一遍（如果只剩下一个元素也要检查）
    const mid = Math.floor((left + right) / 2); // 下取整取中值
    
    if (nums[mid] < target) {
      left = mid + 1;
    }
    else if (nums[mid] === target) {
      return mid;
    }
    else {
      right = mid - 1;
    }
  }
  return left;
};