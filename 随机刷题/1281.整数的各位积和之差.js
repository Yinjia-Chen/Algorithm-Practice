/**
 * @param {number} n
 * @return {number}
 */

// 1.0 转字符串reduce处理：时间复杂度O(n) 空间复杂度O(n)
var subtractProductAndSum = function(n) {
  let numArr = Array.from(String(n), Number);

  // 和，accu累计值，curr当前值，参数2初始值0
  let sum = numArr.reduce((accu,curr)=>{
    return accu + curr
  },0)

  // 积，accu累计值，curr当前值，参数2初始值0
  let product = numArr.reduce((accu,curr)=>{
    return accu * curr
  },1)

  return (product - sum)
};

// 2.0 数学逻辑切割各位数累加累乘：时间复杂度O(logn) 空间复杂度O(1)
// 注意：js中/是普通除法，会得到小数，因此需要下取整来去除个位数字
var subtractProductAndSum = function (n) {
  // 循环，每次循环取出n的个位做累加累乘，并截掉n最后一位
  let sum = 0; // 和
  let product = 1; // 积
  while (n > 0) {
    sum += n % 10; // 累加最后一位
    product *= n % 10; // 累乘最后一位
    n = Math.floor(n / 10); // 去掉个位
  }

  return (product - sum)
};