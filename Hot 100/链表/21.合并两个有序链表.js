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
var mergeTwoLists = function (list1, list2) {
  // 终止条件：某一条链表已经为空，将另一条链表剩下节点全都合并上去
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  // 递：剩余未合并部分的链表 (并用 next 接住)    归：当前的较小节点
  // 单层逻辑：较小的头节点作为本层结果节点，将其 next 指向对剩余部分递归合并后的链表
  // 这里的 list1 & list2 指的是两个链表当前的节点
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
}