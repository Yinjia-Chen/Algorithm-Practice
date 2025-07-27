// 1.0 极其复杂的一坨屎写法：先筛选成数字数组，随后对数组排序去重复，根据数组长度返回值
function secondHighest(s: string): number {
  // 分割字符串放入数组
  let arr = s.split('');
  // 筛选出数组中的数字
  let arr_num: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    if (!isNaN(num)) {
      arr_num.push(num);
    }
  }
  // 数字数组排序
  arr_num.sort();
  // 数字数组去重
  let arr_num_unique: number[] = [];
  for (let i = 0; i < arr_num.length; i++) {
    if (arr_num[i] !== arr_num[i + 1]) {
      arr_num_unique.push(arr_num[i])
    }
  }

  if (arr_num_unique.length <= 1) {
    return -1;
  } else {
    return arr_num_unique[arr_num_unique.length - 2];
  }
};

// 2.0 直接遍历：
function secondHighest(s: string): number {
  // 分割字符串
  let arr = s.split('');

  // 定义最大值和最小值，初始化为-1
  let first = -1;
  let second = -1
  // 遍历整个数组
  for (let i = 0; i < arr.length; i++) {
    // 将遍历到的数组元素转换成number类型，如果是字符串会转换成NaN
    const num = Number(arr[i]);
    // isNaN，是NaN返回true，筛选出数字
    if (!isNaN(num)) {
      // 判断当前数字是否是最大的数字，若是，则令第二大等于最大，最大等于当前
      if (num > first) {
        second = first;
        first = num;
      } else if (num < first && num > second) { // 若不是最大数字，比第二大更大则更新第二大，否则跳过
        second = num;
      }
    }
  }
  return second
};