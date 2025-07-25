// 1.0循环处理：时间复杂度O(n)
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // 循环处理
  while (num >= 10) {
    // 定义结果，每次循环重置
    let res = 0;

    // 将数字转成字符串，拆成单个个位数字存入数组
    let arr = num.toString().split('');

    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
      // 遍历到的数组元素，转换成数字
      let n = Number(arr[i]);

      // 累加结果
      res += n;
    }
    // 赋值给num，重新进入while循环判断是否是多位数
    num = res;
  }

  // 返回最终结果
  return num;
};