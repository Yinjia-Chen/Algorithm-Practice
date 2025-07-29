/**
 * @param {string} s // 字符串
 * @param {number} k // 字串长度（窗口大小）
 * @return {number}
 */

// 0.1 全量遍历逻辑：复杂度过高
var maxVowels = function (s, k) {
  // 建立哈希表
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  // 左指针初始化为字符串左端
  let left = 0;
  // 右指针初始化为left + 窗口大小，以此来构建出需要的窗口
  let right = left + k - 1;
  // 比较赋值最大值
  let max = 0;
  // 右指针不超过字符串末位字符
  while (right < s.length) {
    // 定义一个局部变量来存放当前窗口出现的元音字符次数
    let sum = 0;
    // 遍历当前窗口
    for (let i = left; i <= right; i++) {
      if (vowels.has(s[i])) {
        sum++
      }
    }
    // 比较赋值
    max = Math.max(max, sum)
    // 全量遍历：本次遍历结束，窗口右移一个索引
    right ++;
    left ++;
  }
  return max
};

// 1.0 滑动窗口计数 定长必须同时移动左右指针，只判断移出窗口的旧左端点和移入从窗口的新右端点是否是元音来对已有的个数做加减：时间复杂度O(n) 空间复杂度O(1)
var maxVowels = function (s, k) {
  // 定义元音字母哈希表
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let sum = 0;
  let left = 0;
  let right = left + k - 1;
  // 第一次遍历得到第一个窗口的sum
  for (let i = left; i <= right; i++) {
    if (vowels.has(s[i])) {
      sum++;
    }
  }

  // 维护 max 比较赋值确保最大值
  let max = sum;

  // 遍历调整窗口大小
  while (right < s.length - 1) {
    // 先校验新进入的右边界
    right++;
    if (vowels.has(s[right])) {
      sum++;
    }

    // 再校验已有的左边界
    if (vowels.has(s[left])) {
      sum--;
    }
    left++;
    // 比较赋值
    max = Math.max(max,sum)
  }

  return max
}

// 1.1 前缀和写法 主练习：时间复杂度 O(n) 空间复杂度O(n)
var maxVowels = function (s, k) {
  const length = s.length;
  // 定义前缀和数组
  const prefix = new Array(length).fill(0);
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // 初始化前缀和数组，处理第一个字符
  prefix[0] = vowels.has(s[0]) ? 1 : 0;
  // 根据前缀和逻辑特点，完成前缀和数组，prefix[i] 就是s的下标从 0 到 i 的元音数
  for (let i = 1; i < length; i++){
    prefix[i] = prefix[i - 1] + (vowels.has(s[i]) ? 1 : 0);
  }

  // 计算第一个窗口的元音数，即 arr[0] 到 arr[k-1] 此窗口中有多少元音数
  let max = prefix[k - 1];
  // 从第一个窗口右边界的右移一位开始遍历，根据前缀和思想，prefix[i]是从0到i的子串的元音总数，prefix[i-k]是从0到i-k的子串的元音总数，因为从k开始遍历，所以i每次右移一位，prefix[i-k]就从prefix[0]开始增大，逐渐得到窗口外的旧左端点，再做减法就能得到当前窗口的元音总数
  for (let i = k; i < length; i++){
    max = Math.max(max, prefix[i] - prefix[i - k]);
  }
  return max;
}