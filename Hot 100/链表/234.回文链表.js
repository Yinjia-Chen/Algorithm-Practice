/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// & 1.数组 + 双指针 时间 O(N) 空间 O(N)
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;
  const valArr = [];
  let curr = head;
  while (curr !== null) {
    valArr.push(curr.val);
    curr = curr.next;
  }

  let left = 0;
  let right = valArr.length - 1;
  while (left < right) {
    if (valArr[left] !== valArr[right]) return false;
    left++;
    right--;
  }
  return true;
};

// & 2.快慢指针 + 反转链表 时间 O(N) 空间 O(1)
// 找到链表中点：奇数取中点，偶数取中间右边的结点(后半段的第一个结点)
var listNodeMid = function (head) {
  let slow = head;
  let quick = head;
  while (quick && quick.next) {
    slow = slow.next;
    quick = quick.next.next;
  }
  return slow
}

// 反转链表
var reverseList = function (head) {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

var isPalindrome = function (head) {
  // 找到 中间节点
  const midNode = listNodeMid(head);
  // 反转后半段链表
  const head2 = reverseList(midNode);

  let curr1 = head;
  let curr2 = head2;

  while (curr1 && curr2) {
    if (curr1.val !== curr2.val) return false;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  // 可选：恢复链表(从中点前一个结点到中点的连接从来没有断掉)
  reverseList(head2);

  return true;
}