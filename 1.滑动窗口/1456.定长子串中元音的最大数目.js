/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 复杂度过高
var maxVowels = function (s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let left = 0;
  let right = left + k;
  let max = 0;
  while (right < s.length) {
    let sum = 0;
    for (let i = left; i < right; i++) {
      if (vowels.has(s[i])) {
        sum++
      }
    }
    max = Math.max(max, sum)
    right ++;
    left ++;
  }

  return max
};