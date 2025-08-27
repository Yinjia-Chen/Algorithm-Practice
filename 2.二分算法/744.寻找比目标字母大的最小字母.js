/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// 1.0 lowerBound + 后处理
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // 没找着，此时 left 位于最后一位右侧
  if (left === letters.length) return letters[0];

  // 找着了，直接返回
  if (letters[left] > target) return letters[left];
  
  // left 指向 target ，可重复，因此还需向右找，有可能使时间复杂度退化到 O(N)
  while (letters[left] === target) {
    left++;
    if (left === letters.length) return letters[0];
  }
  return letters[left];
};

// 2.0 利用非递减特性，优化 lowerBound 算法
var nextGreatestLetter = function (letters, target) {
  // 非递减特性直接判断是否存在
  if (target >= letters[letters.length - 1]) {
    return letters[0];
  }

  // 优化过的 lowerBound 算法
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return letters[left];
};