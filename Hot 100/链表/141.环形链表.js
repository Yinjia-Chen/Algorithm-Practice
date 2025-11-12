/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// & 1.哈希 时空 O(N)
var hasCycle = function (head) {
  // 记录节点索引
  let pos = -1;
  let curr = head;
  const map = new Map();

  // 遍历链表节点
  while (curr !== null) {
    // 移动索引
    pos++;
    // 如果当前节点在哈希表中已经存在，说明形成了环
    if (map.get(curr)) return true;
    // key - 结点(val不一定唯一) val - 节点索引
    map.set(curr, pos);
    // 移动指针
    curr = curr.next;
  }
  // 没出现环
  return false;
};

// & 2.快慢指针