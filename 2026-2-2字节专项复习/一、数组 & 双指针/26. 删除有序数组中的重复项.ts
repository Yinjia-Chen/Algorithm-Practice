/**
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4,_,_,_,_,_]
 */
function removeDuplicates(nums: number[]): number {
  let slow = 1;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] != nums[fast - 1]) {
      nums[slow++] = nums[fast]
    }
  }
  return slow;
}
