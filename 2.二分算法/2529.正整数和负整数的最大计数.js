// 返回第一个 >target 的索引
var upperBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    }
    else { // 将 =target 的情况合并到 <target 中，防止 left&right 不更新，出现死循环
      left = mid + 1;
    }
  }
  return left;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;

  let index_pos = upperBound(nums, 0); // 得到第一个正数索引
  let index_neg = upperBound(nums, -1); // 得到第一个非负索引

  // 数组索引从0开始的特性，对应处理得到正负数个数
  pos = nums.length - index_pos;
  neg = index_neg;

  return Math.max(pos, neg)
};