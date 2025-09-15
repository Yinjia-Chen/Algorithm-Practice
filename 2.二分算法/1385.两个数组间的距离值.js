/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

// 1.0 暴力解法：双循环嵌套，逐个比较，时间复杂度 O(n) ~ O(mn)  空间复杂度 O(1)

// 2.0 排序 + 二分：时间复杂度 O(mlogm + nlogm) 空间复杂度 O(1)
var findTheDistanceValue = function (arr1, arr2, d) {
  if (arr2.length === 0) return arr1.length;
  arr2.sort((a, b) => a - b);

  const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  let ans = 0;
  for (const x of arr1) {
    // 在 arr2 中找第一个 >= (x - d) 的元素位置
    const i = lowerBound(arr2, x - d);
    // 若 i 越界：所有元素都 < x-d ⇒ 也都 < x-d ≤ x+d ⇒ 都与 x 距离 > d
    // 若 i 未越界但 arr2[i] > x + d：第一个 >= x-d 的元素已经跳到区间右侧 ⇒ 区间 [x-d, x+d] 内无元素
    if (i === arr2.length || arr2[i] > x + d) {
      ans++;
    }
  }
  return ans;
};