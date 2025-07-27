// 1.0 枚举解法：右指针依次遍历数组元素，左指针从右指针起向左遍历，累加结果，每得到一个符合k的结果，记录一次
// 时间复杂度 O(n^2)
function subarraySum(nums: number[], k: number): number {
  // 存储结果，记录子串个数
  let res = 0;
  for (let right = 0; right < nums.length; right++) {
    // 计算子串的和
    let sum = 0;
    for (let left = right; left >= 0; left--) {
      sum += nums[left];
      if (sum == k) {
        res++;
      }
    }
  }
  return res;
};

// 2.0 时间复杂度 O(n)
// 前缀和:从数组第一个元素开始累加得到的和
// 思路:遍历整个数组，并将下标为 0、1、2 ... nums.length-1 的前缀和依次存入哈希表,通过各个前缀和做减法,可以得到任何一个子串的元素和,例如:下标为0～5的前缀和 - 下标为0～2的前缀和，即可得到子串下标为3～5的元素和,由此将所有前缀和存入哈希表,通过 前缀和 - k 作为map.get的对象,得到则res++

function subarraySum(nums: number[], k: number): number {
    // 创建哈希表，用于记录前缀和及其出现的次数
    const map: Map<number, number> = new Map();
    // 初始化前缀和为 0 的出现次数为 1，处理前缀和恰好等于 k 的情况
    map.set(0, 1);
    // 当前的前缀和
    let sum = 0;
    // 计数器，记录子数组和等于 k 的子数组数量
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        // 计算当前的前缀和
        sum += nums[i];
        // 计算需要查找的目标前缀和
        const target = sum - k;
        // 如果目标前缀和存在于哈希表中，说明存在子数组和等于 k
        if (map.has(target)) {
            res += map.get(target)!;
        }
        // 更新当前前缀和的出现次数
        if (map.has(sum)) {
            map.set(sum, map.get(sum)! + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return res;
};   