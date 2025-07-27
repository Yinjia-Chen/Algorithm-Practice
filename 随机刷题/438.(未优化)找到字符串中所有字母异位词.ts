// 1.0 滑动窗口思想：保持窗口大小不变，每滑动一次，检查窗口内内容是否符合要求
function findAnagrams(s: string, p: string): number[] {
  // 定义变量存储s和p的长度
  const sLen = s.length, pLen = p.length;

  // s长度小于p长度，不可能找到异位词，直接返回空数组
  if (sLen < pLen) return [];

  // 定义结果数组ans，创建两个含有26个元素的数组，并填满0，用来计数字母出现次数
  const ans: number[] = [];
  const sCount: number[] = new Array(26).fill(0);
  const pCount: number[] = new Array(26).fill(0);

  // 循环遍历p（p全小写）
  for (let i = 0; i < pLen; i++) {
    // String.prototype.charCodeAt()得到字符串的unicode编码（包括ascii码值）
    // 遍历到的p的字符的ascii码值 - "a"对的ascii码值 = 该字符在26位中的顺序，即索引，频次+1
    sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    pCount[p[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // 此时遍历了「p」和「s的前pLen位」，得到结果完全一致说明前pLen位是一个异位词
  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  // 遍历剩余的s
  for (let i = 0; i < sLen - pLen; i++) {
    // 左端右移一个单位，右端右移一个单位，即每次计入频次数组的窗口长度是pLen
    // 左端移出窗口，左端原来的字符频次-1
    sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    // 右端移入窗口，右端新进入的字符频次+1
    sCount[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)]++;

    // 检查当前窗口内容(比较窗口滑动后数组&目标数组)
    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1)
    }
  }
  return ans;
};

// 1.1 比较字母出现次数 -> 字母出现次数的差=0？   js写法，未深挖
var findAnagrams = function(s, p) {
    const sLen = s.length, pLen = p.length;

    if (sLen < pLen) {
        return [];
    }

    const ans = [];
    const count = Array(26).fill(0);
    for (let i = 0; i < pLen; ++i) {
        ++count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
        --count[p[i].charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    let differ = 0;
    for (let j = 0; j < 26; ++j) {
        if (count[j] !== 0) {
            ++differ;
        }
    }

    if (differ === 0) {
        ans.push(0);
    }

    for (let i = 0; i < sLen - pLen; ++i) {
        if (count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {  // 窗口中字母 s[i] 的数量与字符串 p 中的数量从不同变得相同
            --differ;
        } else if (count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {  // 窗口中字母 s[i] 的数量与字符串 p 中的数量从相同变得不同
            ++differ;
        }
        --count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];

        if (count[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)] === -1) {  // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从不同变得相同
            --differ;
        } else if (count[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {  // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从相同变得不同
            ++differ;
        }
        ++count[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)];

        if (differ === 0) {
            ans.push(i + 1);
        }
    }

    return ans;
};
