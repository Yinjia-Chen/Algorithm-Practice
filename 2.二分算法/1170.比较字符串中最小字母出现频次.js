/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

// 1.0 暴力解法：循环嵌套 时间 O(Nmlogn)  空间 O(Nm)
var numSmallerByFrequency = function (queries, words) {
  // 函数 f(s)：统计 s 中（按字典序比较）最小字母的出现频次
  const f = (s) => {
    const arr = s.split('');
    // 找出字典序的最小字母
    const minChar = arr.reduce((a, b) => a < b ? a : b);
    // 过滤成只含有最小字母的数组，长度就是个数
    return arr.filter(char => char === minChar).length;
  }

  const answer = new Array(queries.length).fill(0);
  // 外层循环：取出query
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    let res = 0;
    // 内层循环：
    for (const word of words) {
      if (f(word) > f(query)) res++;
    }
    answer[i] = res;
  }

  return answer;
};

// 2.0 二分排序
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

// 1.0 暴力解法：循环嵌套 时间 O(Nmlogn)  空间 O(Nm)
var numSmallerByFrequency = function (queries, words) {
  // 函数 f(s)：统计 s 中（按字典序比较）最小字母的出现频次
  const f = (s) => {
    const arr = s.split('');
    // 找出字典序的最小字母
    const minChar = arr.reduce((a, b) => a < b ? a : b);
    // 过滤成只含有最小字母的数组，长度就是个数
    return arr.filter(char => char === minChar).length;
  }

  const answer = new Array(queries.length).fill(0);
  // 外层循环：取出query
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    let res = 0;
    // 内层循环：
    for (const word of words) {
      if (f(word) > f(query)) res++;
    }
    answer[i] = res;
  }

  return answer;
};

// 2.0 预处理+二分排序：时间 O((n + m) * L + (n + m) log m) 空间 O(n + m)
var numSmallerByFrequency = function (queries, words) {
  // 函数 f(s)：统计 s 中（按字典序比较）最小字母的出现频次
  const f = (s) => {
    const arr = s.split('');
    // 找出字典序的最小字母
    const minChar = arr.reduce((a, b) => a < b ? a : b);
    // 过滤成只含有最小字母的数组，长度就是个数
    return arr.filter(char => char === minChar).length;
  }

  // 预处理 words：得到每个 word (words元素) 的最小字母的频次，并做升序排序
  const wordValueArr = words.map(f); // 迭代整个 words 数组，对每个元素调用 f ，得每个元素的最小字母的频次
  wordValueArr.sort((a, b) => a - b); // 升序排序整个预处理的结果数组

  // 二分查找：返回第一个 > target 的元素下标
  function upperBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  // 对每个 query 统计答案
  const answer = [];
  for (const query of queries) {
    // 取出当前 query 的比较值
    const queryValue = f(query);
    // push：word的个数 - 刚好大于 query 比较值的 word 的索引 = 大于比较值的 word 个数
    answer.push(wordValueArr.length - upperBound(wordValueArr, queryValue))
  }
  return answer;
}