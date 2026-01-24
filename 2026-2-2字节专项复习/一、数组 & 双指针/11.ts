/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 说明：你不能倾斜容器。
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 */

// 双指针 + 贪心
function maxArea(height: number[]): number {
  const n = height.length - 1;
  let left = 0;
  let right = n;
  let x = n; // 矩形宽
  let y = Math.min(height[left], height[n]); // 矩形高
  let ans: number = x * y; // 矩形面积
  while (left < right) {
    // 每次只移动短边（比当前矩形面积更大的矩形只有可能在高变大时出现）
    height[left] < height[right] ? left++ : right--;
    y = Math.min(height[left], height[right]);
    x -= 1;
    ans = Math.max(ans, x * y);
  }
  return ans;
}

export default maxArea;
