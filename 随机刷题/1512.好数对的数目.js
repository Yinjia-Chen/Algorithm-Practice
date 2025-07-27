// 2.0：用哈希表存放数组中每个数字的出现次数，数字相同索引不同，因此每一个相同的数字对应的索引不同，就能组成对应的索引对，此时就有 对数 = 索引数（出现次数）*（索引数 - 1），除2去重

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // 定义哈希表、结果
  let map = new Map();
  let res = 0;

  // 遍历哈希表存入数据
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  // 遍历哈希表的key（数组元素）
  for (let key of map.keys()) {
    let value = map.get(key); // 获取value
    res += value * (value - 1) / 2 // 计算对数并累加
  }

  // 结果累加
  return res;
};

// 3.0：reduce 改写：对象有一个map和一个累加结果，返回累加结果 nums.reduce.res
var numIdenticalPairs = function (nums) {
  return nums.reduce((acc, num) => {
    // 计算当前数字的历史出现次数（即已存在的可配对数量）
    const count = acc.map.get(num) || 0;
    // 更新总对数（历史配对数 + 当前新增配对数）
    acc.res += count;
    // 更新哈希表中当前数字的出现次数
    acc.map.set(num, count + 1);
    return acc;
  }, { map: new Map(), res: 0 }).res;
};