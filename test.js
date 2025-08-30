var lowerBound_ad = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    }
    else {
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
  // lowerBound 算法优化：返回第一个 >target 的元素的索引
  let index_pos = lowerBound_ad(nums, 0);
  let index_neg = lowerBound_ad(nums, -1);

  pos = nums.length - index_pos;
  neg = index_neg;

  return Math.max(pos,neg)
};

const nums = [-2,-1,-1,1,2,3]
console.log(maximumCount(nums));