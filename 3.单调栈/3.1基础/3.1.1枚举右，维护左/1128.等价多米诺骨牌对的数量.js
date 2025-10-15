/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  // 预处理整个数组，所有数组元素改正序并转字符串 -- 所有多米诺骨牌翻正
  for (let i = 0; i < dominoes.length; i++) {
    let domino = dominoes[i];
    domino.sort((a, b) => a - b);
    dominoes[i] = domino.join(',');
  }

  // 枚举右，维护左 核心逻辑
  // key - 数组元素字符串（多米诺骨牌）   value - 出现次数
  const map = new Map();
  let ans = 0;

  for (const domino of dominoes) {
    const count = map.get(domino) ?? 0;
    ans += count;
    map.set(domino, count + 1);
  }

  return ans;
};

// 注意：看似相同的数组作为 key 存入 map 的时候是不同的 key
// 原理：const a = [1, 2]; const b = [1, 2]; console.log( a === b ) // false