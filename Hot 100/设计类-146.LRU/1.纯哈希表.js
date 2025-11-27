/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // 构造函数
  this.capacity = capacity;
  this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 缓存中没有，直接返回 -1
  if (!this.map.has(key)) return -1;
  // 缓存中有
  const value = this.map.get(key);
  this.map.delete(key); // 删除旧的
  this.map.set(key, value); // 写入新的
  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 如果已有缓存 删除后重新写入
  if (this.map.has(key)) this.map.delete(key);
  this.map.set(key, value);
  // 容量控制
  if (this.map.size > this.capacity) {
    const oldestKey = this.map.keys().next().value;
    this.map.delete(oldestKey);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */