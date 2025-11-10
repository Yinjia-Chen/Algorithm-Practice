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
var reverseList = function(head) {
  // 反转前：head 是头节点，head.next 是第二个节点
  // 反转后：head 要指向 null
  let curr = head;
  let prev = null;

  while (curr !== null) {
    // 取出来当前节点的下一节点
    const next = curr.next;
    // 将当前节点的下一节点 指向 前一个节点
    curr.next = prev;
    // 将 prev 指向 当前节点，用于下一次遍历
    prev = curr;
    // 遍历下一个节点
    curr = next;
  }
  // 因为上面用 prev 保存了当前节点，因此当 curr 为 null 时，prev是原链表的尾节点，也是新链表的头节点
  return prev;
};