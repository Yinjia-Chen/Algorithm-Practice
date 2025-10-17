const s = 'ab#c';  

  const processStr = (str) => {
    const stack = [];
    for (const char of str) {
      // 如果是普通字符，入栈
      // 遇到 '#' 出栈
      if (char === '#' && stack.length !== 0) {
        stack.pop();
      } else if (char === '#' && stack.length === 0) {
        continue;
      } else {
        stack.push(char)
      }
    }
    return stack.join('')
  }
const S = processStr(s)
  
console.log(S);