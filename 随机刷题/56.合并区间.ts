// 1.0 排序算法 时间复杂度O(NLogN)
// 思想: 比较「区间1的右端点」&「区间2的左端点」, < =〉不重叠则推入结果数组, > =〉重叠则更新右端点
function merge(intervals: number[][]): number[][] {
  // 根据左端点从小到大升序排列
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = []; // 定义结果数组
  res.push(intervals[0]); // 默认先将排序后的第一个区间推入数组
  for (let i = 1; i < intervals.length; i++) { // 从第二个区间开始遍历
    // Array.prototype.at(index) index为数组元素下标 负数-n代表倒数第n个元素
    // 比较右端点&左端点
    if (res.at(-1)[1] < intervals[i][0]) { // 右端点 < 左端点 不重叠
      res.push(intervals[i]); // 当前遍历到的区间推入结果数组
    } else { // 右端点 >= 左端点 有重叠
      res.at(-1)[1] = Math.max(res.at(-1)[1], intervals[i][1]); // 比较并更新当前结果的右端点为两个区间右端点的最大值
    }
  }
  return res;
};