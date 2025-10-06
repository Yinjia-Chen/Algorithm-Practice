/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  // nums升序排序
  nums.sort((a, b) => a - b);
  // nums 优化成前缀和（prefixSum[0]=0，prefixSum[k] = 前 k 个最小元素之和）
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    // 注意 nums 下标从 0 开始，prefixSum 的第 i 项应加 nums[i-1]
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  // answer数组
  const answer = new Array(queries.length).fill(0);
  // 先进外层循环
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    // 二分算法找第一个大于目标值(query)的前缀和
    let left = 0;
    let right = prefixSum.length - 1;
    // 内层循环（二分算法核心）
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (prefixSum[mid] > query) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // 此时 left 指向第一个大于目标值的数组元素的索引
    // left - 1 指向最大的 小于等于目标值的元素的索引
    answer[i] = left - 1;
  }
  return answer
};
