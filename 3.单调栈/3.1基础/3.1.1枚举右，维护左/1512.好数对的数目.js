/**
 * @param {number[]} nums
 * @return {number}
 */
// 枚举右，维护左：当前元素左侧有几个相同数字，当前元素就能组成几个好数对
var numIdenticalPairs = function (nums) {
  let ans = 0;
  // 哈希：key-数字，value-以当前遍历到的元素为基准，左侧相同数字的个数
  // 每次遍历到相同数字，先把对应的好数对个数（左侧相同数字的个数，也就是原有的 value）加到 ans 上，再将 value 重设为当前已经遍历到的 key 数字的个数
  const count = new Map();
  // 当前元素左侧有几个相同数字，当前元素就能组成几个好数对
  for (const num of nums) {
    const c = count.get(num) ?? 0;
    ans += c;
    count.set(num, c + 1);
  }
  
  return ans;
};