/**
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 */
function strStr(haystack: string, needle: string): number {
  const n = needle.length;
  for (let i = 0; i <= haystack.length - n; i++) {
    let matched = true;
    for (let j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) {
        matched = false;
        break;
      }
    }
    if (matched) { return i };
  }
  return -1;
};