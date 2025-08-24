// 二分核心算法：lowerBound —— 在升序序列中找到第一个大于等于 target 的位置
const lowerBound = (nums, target) => {
  let left = 0; // 闭区间左端点
  let right = nums.length - 1; // 闭区间右端点
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 二分核心：取中值下取整
    if (nums[mid] >= target) { // 中间值大于目标值：目标值在左半个区间，调整 right
      right = mid - 1;
    } else { // 中间值小于目标值：目标值在右半个区间，调整 left
      left = mid + 1;
    }
  }
  return left; // 最后结果：数组中第一个 >=target 的下标
}

// Q1：为什么 把 =target 和 >target 的情况写在一起？
// A:  lower_bound 要找“第一个 >= target”的位置。只要 nums[mid] >= target，答案不在 mid 右侧，
//     应继续向左收缩（闭区间：right = mid - 1 / 半开区间：right = mid）。
//     若等于时直接返回，可能错过更左的相同值（如 [1,2,2,2,3], target=2，应返回 1）。

// Q2：若 nums[mid] === target，不会让 mid 左移一位错过对应的所索引了吗？
// A： 当相等时，后续循环寻找左半区间是否有更小的索引使得等于 target
//     若找不到，最后 left = mid + 1，让 left 回到 Q2 中的 mid 并返回