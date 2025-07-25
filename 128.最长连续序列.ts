// 1.0 数组排序->通过循环计算 暴力解法
function longestConsecutive(nums: number[]): number {
	// 数组为空 直接返回
  if (nums.length === 0) return 0;

  // 数组排序，因为是number元素，需要在sort中加入排序逻辑
  nums.sort((a, b) => a - b);

  let numsLength = 1; // 每个连续序列的长度，当前序列长度（每次循环中）
  let newLength = 1; // 最长连续连续序列，每次循环结束与当前序列长度比较

  // 遍历排序后的数组，从第二个元素开始遍历
  for (let i = 1; i < nums.length; i++) {
  	// 前一位与当前连续
    if (nums[i] === nums[i - 1] + 1) {
        numsLength++; // 当前序列长度加长
    }
    // 前一位与当前重复
    else if (nums[i] === nums[i - 1]) {
        continue; // 跳过本次循环的逻辑
    }
    // 不连续&&不重复
    else {
        numsLength = 1; // 置空当前序列
    }

    // 比较当前序列与已记录的最长序列长度，取最大值
    newLength = Math.max(newLength, numsLength);
  }

  return newLength;
};

// 2.0 哈希表：①去重  ②直接用静态方法查找是否存在需要的键
function longestConsecutive(nums: number[]): number {
  // 数组为空 直接返回
  if (nums.length === 0) return 0;

  // 定义一个set哈希表，map哈希存放键值对，set哈希只存键
  let num_set: Set<number> = new Set();

  // 循环遍历数组，并将所有数组元素存入set（无序排列&&消除重复）
  for (const num of nums) {
    num_set.add(num);
  };

  let longestStreak = 0; // 已记录的最长序列长度，每次循环结束更新

  // 循环遍历set哈希表（已去重）
  for (const num of num_set) {
    // 如果set中不存在当前元素num的前一位（序列起点）
    if (!num_set.has(num - 1)) {
      let thisNum = num; // 记录序列起点，并以此作为后续序列的检测点
      let currentStreak = 1; // 当前序列长度为1

      // 根据条件“set中含有符合序列连续的下一位”循环
      while (num_set.has(thisNum + 1)) {
        // 当前序列长度+1
        currentStreak += 1;

        // 更新检测点
        thisNum += 1;
      }

      // 每次循环末尾，以上一次最长序列长度与当前序列长度比较，更新最长的序列长度
      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }

  return longestStreak
};