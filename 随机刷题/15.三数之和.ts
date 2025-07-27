// 双指针解法 时间复杂度O(n^(2))
function threeSum(nums: number[]): number[][] {
  // 先对数组从小到大排序
  nums.sort((a, b) => a - b);
  // 定义存储结果三元组的空数组
  const result: number[][] = [];
  // 用n表示数组长度
  const n = nums.length;

  // 遍历数组，不用遍历最后一个元素
  for (let i = 0; i < n - 2; i++) {
    // 遇到重复元素，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 定义需要找到的结果为「当前遍历到的元素的相反数」
    const target = -nums[i];
    // 左指针指向「当前遍历到元素」的右侧第一个元素
    let left = i + 1;
    // 右指针指向「数组最后一个元素」
    let right = n - 1;

    // 当左右指针未相撞（即对于当前元素的目标和查找未完成）
    while (left < right) {
      // 定义「左右指针指向元素的和」
      const sum = nums[left] + nums[right];

      // 如果「当前和」等于「目标和」
      if (sum === target) {
        // 将「当前遍历元素, 左指针指向元素, 右指针指向元素」push入结果数组
        result.push([nums[i], nums[left], nums[right]]);

        // 在未相撞的前提下
        // 左指针指向元素重复，左指针右移
        // 右指针指向元素重复，右指针左移
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        // 「当前和」与「目标和」相等逻辑执行完，跳过重复元素，左指针右移，右指针左移
        left++;
        right--;
      } else if (sum < target) {
        // 「当前和」小于「目标和」，因为从小到大排序，所以左指针右移以扩大当前和
        left++;
      } else {
        // 「当前和」小于「目标和」，右指针左移缩小当前和
        right--;
      }

    }

  }

  return result;
}    