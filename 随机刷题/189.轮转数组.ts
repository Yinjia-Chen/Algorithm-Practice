// 1.0 哈希表解法：键——新索引，值——原元素  因为map可以通过get(key)拿到value，那就get(新索引)拿到对应的元素，并随着数组遍历覆盖原数组
// 时间复杂度 O(N)
// 注意：新索引的计算方式 要取模：存在偏移量k大于数组长度的情况，取模->当偏移量超过数组长度，只计算重新回到原索引位置后偏移的大小，保证新索引正确
function rotate(nums: number[], k: number): void {
  if (nums.length <= 1) { // 数组长度小于等于1，不对数组进行操作，直接return
    return
  } else {
    // 存入哈希表，键 新索引, 值 原元素. map.get(key)得到value,覆盖原数组用get到的value
    // newIndex = (i + k) % nums.length
    let map: Map<number, number> = new Map(); // 创建哈希表
    // for...in 拿到索引(string)     for...of 拿到元素
    for (let i = 0; i < nums.length; i++) {
      const newIndex = (i + k) % nums.length; // 正确计算新索引（取模）确保新索引不超出数组长度
      map.set(newIndex, nums[i]); // 存储原元素到新索引位置
    }
    for (let i = 0; i < nums.length; i++) { // 遍历原数组
      nums[i] = map.get(i)!; // 遍历时，根据哈希表中存入的新索引&元素的映射，在到达对应索引时覆写原数组
    }
  }
};

// 2.0 暴力解法：根据偏移后的结果，把超出原数组末尾的元素切出来，unshift添加到原数组开头，得到结果
function rotate(nums: number[], k: number): void {
  let _k = k
  if(k > nums.length){
      _k = k % nums.length
  }
  const right = nums.slice(nums.length - _k, nums.length)
  nums.length = nums.length - _k
  nums.unshift(...right)
};