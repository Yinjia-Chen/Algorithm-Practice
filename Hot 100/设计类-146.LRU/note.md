# LRU 缓存（Latest Recently Used）

## 定义

- 理解参考灵神：https://leetcode.cn/problems/lru-cache/solutions/2456294/tu-jie-yi-zhang-tu-miao-dong-lrupythonja-czgt

- 顾名思义就是 **对最近、最多使用的内容做缓存**
  - 缓存：没缓存过的要存进去
  - 最近：存入内容时，当容量超出，把最底端内容的（意会：距离上次使用最久远（一摞书的最底端））移出缓存
  - 最多：缓存已经缓存过的内容时，把该内容重新放到最顶端

## 实现

### 1. MapOnly

1. `get(key)`：读取缓存

   - 如果缓存中没有，返回 -1
   - 如果缓存中有
     1. 取出缓存内容 `value`
     2. 删除原有缓存键值对
     3. 重新设置键值对 `key-value`
     4. 返回缓存内容 `value`

2. `put(key, value)`：写入缓存

   - 如果缓存中有
     1. 删除原有 `key-value`
     2. 重新写入新的 `key-value`
   - 如果缓存中没有，直接写入 `key-value`
   
   
      - 校验容量是否超出：超出则取出最老的缓存的 `oldestKey`，删除 `oldestKey`

### 2. Map + 双向链表
