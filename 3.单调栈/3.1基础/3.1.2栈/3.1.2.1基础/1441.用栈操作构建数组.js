/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const opt = []; // 操作序列数组
  const stack = []; // 定义栈
  let i = 0; // 循环 target 数组的索引
  const maxTarget = target[target.length - 1]; // 取出 target 数组中的最大值

  // 循环整数流：终止条件是 target 中的最大元素
  for (let value = 1; value <= maxTarget; value++) {
    // 先 push
    stack.push(value);
    opt.push("Push");

    // 栈顶整数匹配 target 元素
    if (value === target[i]) {
      // 循环 target 中下一个元素
      i++;
    } else {
      // 栈顶整数不匹配 target 元素
      // 出栈
      stack.pop();
      opt.push("Pop");
    }
  }

  return opt;
};