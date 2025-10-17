/**
 * 栈 时空复杂度 O(N)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // 处理 s 和 t，比较处理结果

  // 字符串处理函数
  const processStr = (str) => {
    const stack = [];
    for (const char of str) {
      // 如果是普通字符，入栈
      // 遇到 '#' 出栈
      if (char === '#') {
        if (stack.length) stack.pop();
      } else {
        stack.push(char)
      }
    }
    return stack.join('')
  }

  // 处理 s 和 t
  const S = processStr(s);
  const T = processStr(t);

  if (S === T) return true;
  else return false;

};

// processStr reduce写法优化重构
const processStr = (str) => {
  [...str].reduce((acc, char) => {
    if (ch === '#') { acc.length && acc.pop() }
    else { acc.push(char) };
    return acc
  }, []).join('');
}