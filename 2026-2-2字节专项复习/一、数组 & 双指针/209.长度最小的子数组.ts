/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 输入：target = 7, nums = [2,3,1,2,4,3] 
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。 
 */
function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  let left = 0;
  let ans = n + 1;
  let sum = 0;
  for (let right = 0; right < n; right++) {
    sum += nums[right];
    while (sum - nums[left] >= target) {
      sum -= nums[left];
      left++;
    }
    if (sum >= target) {
      ans = Math.min(ans, right - left + 1)
    }
  }
  return ans <= n ? ans : 0;
};