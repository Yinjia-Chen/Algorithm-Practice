/**
 * 时空复杂度 O(N)
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];
  
  for (const opt of operations) {
    if (opt === 'C') {
      stack.pop(); // 移除前一次得分
    } else if (opt === 'D') {
      stack.push(stack[stack.length - 1] * 2); // 前一次得分的两倍
    } else if (opt === '+') {
      const len = stack.length;
      stack.push(stack[len - 1] + stack[len - 2]); // 前两次得分之和
    } else {
      stack.push(Number(opt)); // 整数字符串转数字后入栈
    }
  }
  
  return stack.reduce((acc, cur) => acc + cur, 0); // 返回所有得分总和
};
