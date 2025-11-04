/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 不改变链表结构，默认 AB 都不存在环结构
 * @param {ListNode} headA 单链表 A 头节点
 * @param {ListNode} headB 单链表 B 头节点
 * @return {ListNode} 两个单链表相交的起始节点，不存在为 null
 */

// & 1.双指针 + Set哈希 时间 O(m + n) 空间 O(m)
var getIntersectionNode = function (headA, headB) {
  // 定义两个指针指向 A 和 B 的头节点
  let nodeA = headA;
  let nodeB = headB;

  // 哈希表：key - val，value - node
  const set = new Set();

  while (nodeA !== null) {
    set.set(nodeA);
    nodeA = nodeA.next;
  }

  while (nodeB !== null) {
    if(set.get(nodeB)) return nodeB;
    nodeB = nodeB.next;
  }

  return null;
};

// & 2.单指针 + 哈希 时间 O(m + n) 空间 O(m)
var getIntersectionNode = function (headA, headB) {
  // 定义一个指针遍历链表 A
  let cur = headA;
  
  // 定义一个哈希表存放链表 A 的所有节点
  const set = new Set();

  while (cur !== null) {
    set.add(cur);
    cur = cur.next;
  }

  cur = headB;
  while (cur!==null) {
    if (set.has(cur)) return cur
    cur = cur.next;
  }

  return cur;
};

// & 3.双指针 时间 O(m + n) 空间 O(1)
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  // 找到了出循环返回，找不到换对面链表，双指针同时到 null
  while (nodeA !== nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next;
    nodeB = nodeB === null ? headA : nodeB.next;
  }

  return nodeA;
};