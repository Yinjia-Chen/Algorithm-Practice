/**
 * @param {number[]} nums
 * @return {number}
 */
// 1.0 枚举左，维护右：时空复杂度 O(n)
var findMaxK = function (nums) {
  // 先创建哈希表：key-数组元素，value-索引
  const map = new Map();
  let max = -1;
  // 枚举右，维护左
  for (let j = 0; j < nums.length; j++) {
    // 取出当前数组元素
    const num = nums[j];
    // 存在正负数，比较更新最大值
    if (map.has(-num)) {
      max = Math.max(max, Math.abs(num))
    }
    // 存键值对
    map.set(num, j);
  }

  return max;
};

// 1.1 set优化
var findMaxK = function(nums) {
  let ans = -1;
  const s = new Set();
  for (const x of nums) {
    if (s.has(-x)) {
      ans = Math.max(ans, Math.abs(x));
    }
    s.add(x);
  }
  return ans;
};