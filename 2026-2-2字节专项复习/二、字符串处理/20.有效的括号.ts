/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  每个右括号都有一个对应的相同类型的左括号。

 * 输入：s = "([)]"
 * 输出：false
 */
function isValid(s: string): boolean {
  if (s.length % 2) return false;

  let stack: string[] = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      const joint = stack[stack.length - 1] + s[i];
      const isMatch = joint === '()' || joint === '[]' || joint === '{}';
      if (!isMatch) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

// 也可以用哈希表做左右括号映射 + 栈（相邻匹配必用）
