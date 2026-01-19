# ByteIntern 前端算法全套复习卡片

> 面向 ByteDance 校招 / ByteIntern 前端算法面试
> 包含：题目、LeetCode 编号、JS 模板解法、口述话术

---

## 一、数组 & 双指针

### 1. 两数之和
- **LeetCode:** 1
- **题目:** 给定数组和目标值，找出两个数使它们之和等于目标值。
- **JS 模板:**
```js
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}
```
- **口述话术:** “用哈希表记录每个数字的位置，一次遍历完成查找，时间复杂度 O(n)。”

### 2. 盛最多水的容器
- **LeetCode:** 11
- **JS 模板:**
```js
function maxArea(height) {
  let left = 0, right = height.length - 1;
  let max = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}
```
- **口述话术:** “双指针向中间收缩，取小的那边决定高度，保证覆盖所有可能的容器。”

### 3. 无重复字符的最长子串
- **LeetCode:** 3
- **JS 模板:**
```js
function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
```
- **口述话术:** “滑动窗口维护当前无重复子串，用 Set 快速判断重复。”

### 4. 长度最小的子数组和
- **LeetCode:** 209
- **JS 模板:**
```js
function minSubArrayLen(target, nums) {
  let sum = 0, left = 0, minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
```
- **口述话术:** “滑动窗口动态收缩，保证子数组和 ≥ target。”

---

## 二、字符串处理

### 1. 有效的括号
- **LeetCode:** 20
- **JS 模板:**
```js
function isValid(s) {
  const stack = [];
  const map = {')':'(', ']':'[', '}':'{'};
  for (const c of s) {
    if (map[c]) {
      if (stack.pop() !== map[c]) return false;
    } else stack.push(c);
  }
  return stack.length === 0;
}
```
- **口述话术:** “用栈处理左括号，遇到右括号检查匹配，保证括号合法。”

### 2. 回文串判断
- **LeetCode:** 125
- **JS 模板:**
```js
function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
}
```
- **口述话术:** “双指针从两端向中间扫描，同时忽略非字母数字字符。”

### 3. 字符串相加
- **LeetCode:** 415
- **JS 模板:**
```js
function addStrings(num1, num2) {
  let res = '', carry = 0;
  let i = num1.length - 1, j = num2.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    const x = i >= 0 ? +num1[i--] : 0;
    const y = j >= 0 ? +num2[j--] : 0;
    const sum = x + y + carry;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
  }
  return res;
}
```
- **口述话术:** “模拟手动加法，从低位到高位逐位相加，处理进位。”

---

## 三、哈希表 & 集合

### 1. 字母异位词分组
- **LeetCode:** 49
- **JS 模板:**
```js
function groupAnagrams(strs) {
  const map = new Map();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return Array.from(map.values());
}
```
- **口述话术:** “对每个单词排序生成 key，相同 key 放在同一组。”

### 2. 最长连续序列
- **LeetCode:** 128
- **JS 模板:**
```js
function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLen = 0;
  for (const n of set) {
    if (!set.has(n - 1)) {
      let curr = n, len = 1;
      while (set.has(curr + 1)) { curr++; len++; }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
}
```
- **口述话术:** “用 Set 检查序列起点，然后向上扩展连续序列。”

---

## 四、树 / DFS / BFS

### 1. 二叉树最大深度
- **LeetCode:** 104
- **JS 模板:**
```js
function maxDepth(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
```
- **口述话术:** “递归计算左右子树深度，返回较大值加一。”

### 2. 翻转二叉树
- **LeetCode:** 226
- **JS 模板:**
```js
function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}
```
- **口述话术:** “递归交换左右子树。”

### 3. 二叉树层序遍历
- **LeetCode:** 102
- **JS 模板:**
```js
function levelOrder(root) {
  if (!root) return [];
  const queue = [root], res = [];
  while (queue.length) {
    const level = [], n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(level);
  }
  return res;
}
```
- **口述话术:** “BFS 遍历每层节点，使用队列维护顺序。”

---

## 五、动态规划（基础 DP）

### 1. 爬楼梯
- **LeetCode:** 70
- **JS 模板:**
```js
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
```
- **口述话术:** “dp[i] 表示到第 i 阶的方式数，只依赖前两阶。”

### 2. 打家劫舍
- **LeetCode:** 198
- **JS 模板:**
```js
function rob(nums) {
  let prev = 0, curr = 0;
  for (const num of nums) {
    [prev, curr] = [curr, Math.max(curr, prev + num)];
  }
  return curr;
}
```
- **口述话术:** “每家可以选择偷或不偷，状态转移取最大值。”

### 3. 最大子数组和
- **LeetCode:** 53
- **JS 模板:**
```js
function maxSubArray(nums) {
  let maxSum = nums[0], currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
```
- **口述话术:** “用 Kadane 算法，一边遍历一边累加子数组，取最大值。”

---

## 六、前端工程型算法题

### 1. debounce
- **JS 模板:**
```js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  }
}
```
- **口述话术:** “延迟函数执行，防止高频触发。”

### 2. deepClone
- **JS 模板:**
```js
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const res = {};
  for (const key in obj) res[key] = deepClone(obj[key]);
  return res;
}
```
- **口述话术:** “递归复制对象或数组，保证引用分离。”

### 3. 扁平化嵌套数组
- **JS 模板:**
```js
function flatten(arr) {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item)) res.push(...flatten(item));
    else res.push(item);
  }
  return res;
}
```
- **口述话术:** “递归处理数组，每个元素展开至一维。”

---

## 🔹 使用方法
1. **每天复习 3-5 个题模块**，确保口述 + JS 实现流畅。  
2. **练习边界情况**：空数组、null、单元素。  
3. **面试前 1 小时**：只看模板与口述话术，保证 100% 输出清晰。

---

> 这份复习卡片覆盖字节前端算法题大部分常考题型和工程题模板，48 小时突击即可覆盖核心内容。

