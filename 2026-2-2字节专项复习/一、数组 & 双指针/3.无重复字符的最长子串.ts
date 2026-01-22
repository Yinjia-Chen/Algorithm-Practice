/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 * 输入: s = "abcabcbb"
 * 输出: 3
 */
function lengthOfLongestSubstring(s: string): number {
  let res = 0;
  let left = 0;
  const set = new Set();
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    while (set.has(char)) { // 不存在相同字符，若未删除目标字符，重复逻辑
      set.delete(s[left]); // 删除子串最左端字符
      left++; // 移动左端点，调整窗口
    }
    set.add(char); // 右端点进入窗口
    res = Math.max(res, right - left + 1);
  }
  return res;
}

export default lengthOfLongestSubstring;
