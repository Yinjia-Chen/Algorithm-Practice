/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// & 1.迭代 时间 O(m+n) 空间 O(1)
var mergeTwoLists = function (list1, list2) {
  const sentinel = new ListNode(); // 哨兵节点 val:0 next:null
  let curr = sentinel; // 将 curr 指向新链表的末尾

  while (list1 && list2) {
    if (list1.val < list2.val) { // 递增
      curr.next = list1; // list1当前节点 加入新链表
      list1 = list1.next;
    } else { // 相等节点可以加入任意一条链的该节点，合并到 > 的情况
      curr.next = list2; // list2当前节点 加入新链表
      list2 = list2.next;
    }
    curr = curr.next; // 移动新链表的节点
  }
  // 两条链表中至少有一条已空
  // 空值合并运算符 ??，返回左右操作数中的非空项，若都非空返回左操作数
  curr.next = list1 ?? list2; // 拼接剩余链表

  // 返回新链表，注意用哨兵节点的next
  return sentinel.next;
};

// & 2.递归