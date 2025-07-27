/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

// 1.0 includes + 遍历：时间复杂度O(Nm) 空间复杂度O(1)
var vowelStrings = function (words, left, right) {
  let aim = ['a', 'e', 'i', 'o', 'u']; // 所有元音字幕
  let sum = 0; // 累计和
  for (left; left <= right; left++) {
    let head = words[left][0]; // 取出首字母
    let length = words[left].length - 1; // 得到当前字符串长度
    let end = words[left][length] // 取出尾字母
    // Array.includes(value)方法
    if (aim.includes(head) && aim.includes(end)) {
      sum++;
    }
  }
  return sum;
};

// 1.1 set哈希：时间复杂度O(N) 空间复杂度O(1)
var vowelStrings = function (words, left, right) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']) // 元音set
  let sum = 0; // 结果

  for (let i = left; i <= right; i++) {
    let word = words[i]; // 取出每次遍历到的字符串，便于校验首位字母
    if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
      sum++
    }
  }

  return sum
}