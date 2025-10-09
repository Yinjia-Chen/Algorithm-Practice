// 枚举右，维护左 + 哈希表写法：时空 O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 创建一个空哈希表：key-数组元素num，value-元素下标index
  const idx = new Map();

  // 右侧索引就用变量 j，左侧就用 i，此处左侧随着右侧枚举产生，不需要使用 i
  // 用索引逐个枚举 nums[j]，每次枚举右侧时，检查是否已经有存入哈希表（维护左）且满足条件的键值对
  for (let j = 0; ; j++) {
    const num = nums[j];
    // 此时已经枚举右侧数据 num
    // 维护左侧，查找哈希表中是否已经存入满足条件的键值对
    if (idx.has(target - num)) {
      // 找到了，返回两个数的下标
      return [idx.get(target - num), j];
    }
    // 没找到，保存进哈希表
    idx.set(num, j);
  }
};