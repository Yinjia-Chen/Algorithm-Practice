// 1.0 双循环+双指针+哈希表 slow < n-1 错误解法：未考虑 "" 和 " " 的情况
// 虽然时间复杂度为 O(n) 但双循环的方式使用大量时间
function lengthOfLongestSubstring(s: string): number {
  const character = new Set();
  const n = s.length;
  let slow = 0;
  let quick = 0;
  let maxLength = 0;
  // slow遍历到n-1，当 " "，不执行循环，结果为0，出错
  for (let slow = 0; slow < n; slow++) {
    character.clear();
    let currentLength = 0;
    quick = slow;
    while (quick < n) {
      if (!character.has(s[quick])) {
        character.add(s[quick]);
        currentLength += 1;
        quick += 1;
      } else {
        break;
      }
    }
    maxLength = Math.max(maxLength,currentLength);
  }
  return maxLength;
};




// 2.0 单循环+双指针+哈希表
function lengthOfLongestSubstring(s: string): number {
  // 建立Set哈希表
  const character: Set<string> = new Set();
  // 定义快慢指针 长度最大值
  let slow = 0;
  let quick = 0;
  let maxLength = 0;

  // 当「快指针」未到达数组字符串末端
  while (quick < s.length) {
    // 哈希表中不存在「快指针指向的字符」(第一次遇上这个字符)
    if (!character.has(s[quick])) {
      // 存入哈希表
      character.add(s[quick]);
      // 快指针后移一格
      quick += 1;
      // 更新「长度最大值」，快慢指针指向索引之差 = 当前子串长度
      maxLength = Math.max(maxLength, quick - slow);
      // 哈希表中存在「快指针指向的字符」
    } else {
      // 哈希表中删除当前慢指针指向元素(当前子串遍历完成)
      character.delete(s[slow]);
      // 慢指针后移一位，开始新一个子串的计数
      slow += 1;
    }
  }

  return maxLength;
};