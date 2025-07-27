/**
 * @param {string} s
 * @return {number}
 */

// 1.0 暴力拆分——依次拆成两个字符串，比较更新分数最大值：时间复杂度 O(n²) 空间复杂度 O(n)
var maxScore = function (s) {
  let max = 0; // 外层定义最大值为0
  for (let i = 0; i < s.length - 1; i++) {
    // slice包含左边界，不包含右边界，右边界索引+1以包含进去
    let s1 = s.slice(0, i + 1);
    let leftScore = 0; // 定义左子串分数
    let s2 = s.slice(i + 1);
    let rightScore = 0; // 定义右子串分数

    // 遍历左子串
    for (const c1 of s1) {
      if (c1 === '0') {
        leftScore++;
      }
    }
    // 遍历右子串
    for (const c2 of s2) {
      if (c2 === '1') {
        rightScore++;
      }
    }

    // 比较更新最大值
    max = Math.max(max, leftScore + rightScore);
  }
  return max;
};

// 2.0 前缀和——每次遍历分割点，统计左侧0的个数，并将所有1的个数减去左侧1的个数：时间复杂度O(n) 空间复杂度O(1)
var maxScore = function (s) {
  let totalOnes = 0; // 1的总个数
  for (const c of s) {
    if (c === '1') {
      totalOnes++;
    }
  }

  let max = 0; // 定义最大值
  let leftZeros = 0; // 左侧0的个数
  let rightOnes = totalOnes; // 右侧1的个数：分割前为总个数
  // 遍历分割点，每次循环都是一次分割
  for (let i = 0; i < s.length-1; i++){
    if (s[i] === '0') { // 遇到0，累加0的个数称为前缀和
      leftZeros++;
    } else {
      rightOnes--; // 遇到1，右侧1的个数就要自减，即右侧1的个数发生变化
    }
    // 比较更新最大值
    max = Math.max(max, leftZeros + rightOnes);
  }
  return max;
}

// 2.1 前缀和数组——空间复杂度不如2.0，但当前缀和数组训练：时空复杂度O(n)
var maxScore = function (s) {
  // 获取字符串长度
  const length = s.length;

  // 定义前缀和数组
  const prefixZero = new Array(length).fill(0);
  const prefixOne = new Array(length).fill(0);

  // 构建前缀和
  for (let i = 0; i < length; i++) {
    prefixZero[i] = (i > 0 ? prefixZero[i - 1] : 0) + (s[i] === '0' ? 1 : 0)
    prefixOne[i] = (i > 0 ? prefixOne[i - 1] : 0) + (s[i] === '1' ? 1 : 0)
  }

  let max = 0; // 定义最大得分

  // 遍历分割点
  for (let i = 1; i < length; i++){
    const leftScore = prefixZero[i - 1];
    const rightScore = prefixOne[length - 1] - prefixOne[i - 1];
    max = Math.max(max, leftScore + rightScore);
  }
  return max;
}

// 2.3 动态平衡计分法——将第一次分割的分数作为最大值，随后每次遍历到一个分割点，调整分数，比较更新最大值：时间复杂度O(n) 空间复杂度O(1)
var maxScore = function (s) {
  let score = 0; // 记录分数
  const length = s.length;

  // 第一个字符是0就先让分数自增为1
  if (s[0] === '0') {
    score++;
  }
  // 第一次分割：后面的字符每有一个1，就让分数自增
  for (let i = 1; i < length; i++) {
    if (s[i] === '1') {
      score++;
    }
  }

  let max = score; // 假设第一次分割的分数值最大

  // i=1是数组的第二个元素，也就是将第二个元素作为分割点，是第二个分割点
  for (let i = 1; i < length - 1; i++) {
    if (s[i] === '0') {
      score++;
    } else {
      score--;
    }
    max = Math.max(max, score); // 比较更新
  }
  return max;
}