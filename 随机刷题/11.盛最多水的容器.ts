// 暴力循环嵌套，遇到巨量数据导致!超时报错!，时间复杂度O(n^(2))
function maxArea(height: number[]): number {
  let finalMaxSize = 0;
  for (let left = 0; left < height.length; left++) {
    let currentMaxSize = 0;
    for (let right = left + 1; right < height.length; right++) {
      let x = right - left;
      let y = Math.min(height[left], height[right]);
      let size = x * y;
      currentMaxSize = Math.max(currentMaxSize, size);
    }
    finalMaxSize = Math.max(finalMaxSize, currentMaxSize);
  }
  return finalMaxSize;
};

// 1.0 双指针解法 时间复杂度O(n)
function maxArea(height: number[]): number {
	// 左指针置最左侧
  let left = 0;
  // 右指针置最右侧（注意是长度-1）
  let right = height.length - 1;
  // 声明最终结果，防止出现块作用域问题
  let finalSize = 0;

  // 当「左指针」未和「右指针」碰撞，执行循环
  while (left < right) {
  	// 计算当前左右指针下的面积值
    let maxSize = (right - left) * Math.min(height[left], height[right]);
    // 比较已记录的最大值与当前情况下的面积，取大记录
    finalSize = Math.max(finalSize, maxSize);
    // 面积 = 「左右指针指向数组元素」的最小值 * 「左右指针指向数组元素下标」的差
    // 任何情况都需要移动指针，即「下标的差」一定缩小，只有增大「数组元素最小值」，才可能出现更大值
    // 由此，「左指针数组元素」小于「右指针数组元素」，则「左指针」右移，反之「右指针」左移，以此缩小时间复杂度
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return finalSize;
};