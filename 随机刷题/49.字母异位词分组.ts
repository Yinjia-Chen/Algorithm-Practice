// 1.0:异位词共有标识作为key，value是存放互为异位词的数组
// 时间复杂度：O(n * k log k)
// 空间复杂度：O(n * k)
function groupAnagrams(strs: string[]): string[][] {
  // 创建哈希表，类型限制，key：string，value：string数组
  const map:Map<string, string[]> = new Map();

  // 遍历strs数组
  for (let i = 0; i < strs.length; i++) {

      // 遍历到的字符串->字符数组->排序->拼成字符串，即异位词共有标识
      let key = Array.from(strs[i]).sort().toString();

      // 哈希表中未存入key
      if (!map.get(key)) {
          // 存入key，并将value设置为空数组
          map.set(key, [])
      } // 哈希表中已有key，不操作

      // 根据key找到对应的value，即哈希表中的字符串数组，将当前数组元素存入对应的数组中
      map.get(key).push(strs[i]);
  }

  // [...map.values()]固定语法：依次输出 迭代哈希表得到的value，并存入数组
  return [...map.values()];
}

// 1.1:
//  ①for-of Array.
//  ②from将迭代器对象展开并转换为数组
//  ③断言map.get(key) 防止ts报错
function groupAnagrams(strs:string[]): string[][] {
  const map:Map<string, string[]> = new Map();
  for(const str of strs) {
      const key = Array.from(str).sort().join('');
      if(!map.has(key)) {
          map.set(key,[]);
      }
      map.get(key)!.push(str);
  }
  return Array.from(map.values());
}

// 1.2: reduce累加器
function groupAnagrams(strs:string[]): string[][] {
  const map:Map<string, string[]> = new Map();
  for(const str of strs) {
      const key = Array.from(str).sort().join('');
      if(!map.has(key)) {
          map.set(key,[]);
      }
      map.get(key)!.push(str);
  }
  return Array.from(map.values());
}