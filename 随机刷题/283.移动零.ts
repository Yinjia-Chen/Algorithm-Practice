// 1.0 暴力解法：①遍历数组，当遇到0时，删除当前元素，并记录0的出现次数 ②根据0出现的次数，在数组末尾添加对应个数的0
function moveZeroes(nums: number[]): void {
	// 记录0出现的次数
  let flag = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      flag += 1;
      nums.splice(i, 1);
      i -= 1;
    }
  }
  for (let j = 1; j <= flag; j++) {
    nums.push(0)
  }
};

// 2.0 双指针（快慢指针）自搓
function moveZeroes(nums: number[]): void {
	// 设置慢指针
  let slow = 0;

  // 设置快指针，遍历数组
  for (let fast = 0; fast < nums.length; fast++) {
  	// 如果快指针遍历到的数据非零
    if (nums[fast] !== 0) {
    	// 将慢指针移动到快指针的位置（即用下一位非0替换慢指针所指向的后一位）
      nums[slow] = nums[fast];
      // 慢指针向后移动一位
      slow++;
    }
    // 如果快指针遍历到的数据为零，慢指针原地不动，不执行操作
  }

  // 此时slow是所有非零数组元素按照原本顺序排列后的数组长度，再将跳过的0补在末尾
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0;
  }
};