// 有别于 lowerBound 算法，返回 >target 的第一个数组元素的索引
const upperBound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// Q1: upperBound 实现什么功能？
// A : 返回升序数组中第一个 >target 的元素的索引
 
// Q2: 为什么要把 =target 的情况也写进去？
// A : 如果不写该情况，当该情况发生，不移动左右指针，永远 left < right，且不移动指针，进入死循环

// Q3: =target 的情况合并到哪里？
// A : 要舍弃所有的 <= target 的目标值，返回值是 left，所以 =target 的逻辑要合并到移动 left 的逻辑中，即 <=target 时