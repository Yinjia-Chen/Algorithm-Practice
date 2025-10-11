/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  // 处理 recatangle 数组，直接优化成宽高比数组
  const subResArr = []
  for (let i = 0; i < rectangles.length; i++) {
    subResArr.push(rectangles[i][0] / rectangles[i][1])
  }

  // 枚举右维护左，利用哈希表记录相同宽高比的出现次数
  // key-宽高比，value-出现次数
  const map = new Map();
  let ans = 0;
  for (const subRes of subResArr) {
    const count = map.get(subRes) ?? 0;
    ans += count;
    map.set(subRes, count + 1)
  }

  return ans;
};