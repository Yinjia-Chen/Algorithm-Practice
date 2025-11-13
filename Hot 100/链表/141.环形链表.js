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
// 哈希表存放结点，每次遍历查找是否已有当前结点，已有说明存在环
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

// & 2.快慢指针 时间 O(N) 空间 O(1)
  // 链表有环，则循环执行到主动退出(fast套了n圈追上slow)返回true
  // 链表无环，则遍历到链表结尾，退出循环返回 false
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  // fast 一次走两个节点，因此要先校验 fast 本身，再校验 fast.next
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}