/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 输入：intervals = [[4,7],[1,4]]
 * 输出：[[1,7]]
  
};
 */
function merge(intervals: number[][]): number[][] {
  // 排序
  intervals.sort((a, b) => a[0] - b[0]);
  const ans: number[][] = [intervals[0]];
  for (const arr of intervals) {
    const n = ans.length;
    // 前终点 & 现终点 相等 也合并
    if (ans[n - 1][1] >= arr[0]) {
      ans[n - 1][1] = Math.max(ans[n - 1][1], arr[1]);
    } else {
      ans.push(arr);
    }
  }
  return ans;
}
