
/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
    你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 */
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  const res: string[] = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    const x = i >= 0 ? num1.charCodeAt(i) - 48 : 0;
    // const x = i >= 0 ? num1.charAt(i) - '0' : 0; // 此时是number，最后用join拼接成string
    const y = j >= 0 ? num2.charCodeAt(j) - 48 : 0;
    const sum = x + y + carry;
    res.push(String.fromCharCode(sum % 10 + 48)); // 取个位
    carry = Math.floor(sum / 10);
    i -= 1;
    j -= 1;
  }
  return res.reverse().join('');
};