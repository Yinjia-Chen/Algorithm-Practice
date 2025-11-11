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

// & 1.迭代实现 时间 O(N) 空间 O(1)
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

// & 2.递归 时空 O(N)
// 递：链表的下一个节点      归：反转后新链表的头节点
// 终止条件：空链表 or 最后一个节点 —— 直接返回当前节点 作为 新链表头节点
// 单层逻辑：先递归反转 head.next 得到 newHead，然后执行 head.next.next = head（将下一个节点指回 head），并把 head.next = null 断开原有连接，最后返回 newHead
var reverseList = function(head) {
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

/* 用具体调用栈看流程（1->2->3->null）：
  reverseList(1)
  calls reverseList(2)
    calls reverseList(3)
      base case: head=3, head.next=null -> return 3
    回到 head=2，newHead = 3
    执行 head.next.next = head：2.next（即 3）.next = 2 → 3.next = 2
    执行 head.next = null：2.next = null
    返回 newHead(3) → 当前子结果：3 -> 2 -> null
  回到 head=1，newHead = 3
  执行 head.next.next = head：1.next（即 2）.next = 1 → 2.next = 1
  执行 head.next = null：1.next = null
  返回 newHead(3) → 最终结果：3 -> 2 -> 1 -> null
*/