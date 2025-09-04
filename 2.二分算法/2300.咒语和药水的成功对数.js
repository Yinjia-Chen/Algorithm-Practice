/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

// 1.0 二分 乘积比较法：题目正整数约束故而好用 时间复杂度 O((n + m) log m)   空间复杂度 O(1) ~ O(log m)
var successfulPairs = function (spells, potions, success) {
  const res = new Array(spells.length).fill(0); // 创建结果数组，与 spells 等长，并置 0
  potions.sort((a, b) => a - b); // 先对药水数组排序，注意不加参数默认字典序升序排序出问题
  
  // 处理每一个 spells
  for (let i = 0; i < spells.length; i++) {
    const spell = spells[i]; // 取出当前的 spell

    // 二分 lowerBound
    let left = 0;
    let right = potions.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // 乘积法：直接用乘积与 success 比较 —— 易于理解 但若数值过大乘积结果可能溢出
      if ((potions[mid] * spell) >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // 处理得到有多少个符合条件的值
    res[i] = potions.length - left
  }
  return res;
};

// 1.1 二分 阈值法（上取整）：need = ceil(success / spell)；在 potions 中找第一个 >= need
var successfulPairs = function (spells, potions, success) {
  const res = new Array(spells.length).fill(0);
  potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    const spell = spells[i];
    // 题目约束 spell > 0，这里用整数上取整：ceil(a/b) = floor((a + b - 1)/b)
    const need = Math.floor((success + spell - 1) / spell);

    // lower_bound(need)
    let left = 0, right = potions.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (potions[mid] >= need) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    res[i] = potions.length - left;
  }
  return res;
};

// 1.2 计数 + 后缀和 未深挖
var successfulPairs = function(spells, potions, success) {
    const mx = Math.max(...potions); // 取出最大的potions
    const cnt = Array(mx + 1).fill(0);
    for (const y of potions) {
        cnt[y]++; // 统计每种药水的出现次数
    }

    // 计算 cnt 的后缀和
    for (let i = mx - 1; i >= 0; i--) {
        cnt[i] += cnt[i + 1];
    }
    // 计算完毕后，cnt[i] 就是 potions 值 >= i 的药水个数

    for (let i = 0; i < spells.length; i++) {
        const low = Math.ceil(success / spells[i]);
        spells[i] = low <= mx ? cnt[low] : 0;
    }
    return spells;
};