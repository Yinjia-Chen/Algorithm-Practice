// 1.0 迭代 
// 时间复杂度 O(n)   空间复杂度 O(1)
function reverseList(head: ListNode | null): ListNode | null {
  let curr = head; // curr 代替 head，用于遍历原链表
  let prev = null; // prev 指向 空
  while(curr !== null){
    const next = curr.next; // 记录原链表下一节点
    curr.next = prev; // 将 curr 链表的下一节点更新为前一节点 prev
    prev = curr; // prev 指向 当前节点（记录反转后链表的每一个节点,从后往前完成新链表）
    curr = next; // curr 向后移动一个节点
  }
  return prev;
};