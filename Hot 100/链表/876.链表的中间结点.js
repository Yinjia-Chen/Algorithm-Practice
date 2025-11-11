/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// 上述算法对于偶数个结点的链表，返回中间右侧的结点
// 下述算法对于偶数个结点的链表，返回中间左侧的结点
var middleNode = function(head) {
  let slow = head;
  let fast = head;
  // 通过提前结束循环来让中点停在左侧
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};