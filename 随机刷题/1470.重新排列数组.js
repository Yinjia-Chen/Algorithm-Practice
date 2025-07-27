/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// 1.0 取出后一半数组，依次推入新数组：时空复杂度O(n)
var shuffle = function (nums, n) {
  // 对半切数组，取出后一半数组
  let arr2 = nums.slice(n)
  // 循环推入新数组
  let resArr = [];
  for (let i = 0; i < n; i++) {
    resArr.push(nums[i]);
    resArr.push(arr2[i]);
  }

  return resArr
};

// 2.0 一次遍历数学处理，索引为偶数推入Xn，奇数推入Yn：时空复杂度O(n)
var shuffle = function (nums, n) {
  let resArr = new Array(n * 2).fill(0);
  for (let i = 0; i < n; i++) {
    resArr[2 * i] = nums[i];
    resArr[2 * i + 1] = nums[i + n];
  }
  return resArr
};