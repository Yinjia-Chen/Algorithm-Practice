/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// ! 0.1 数组 + 迭代 错误解法
// 两条链表中的 节点值 分别取出来存入数组后，迭代取出再相加，和转字符串，每一位上取出后转数字，再从和的字符串尾部开始依次创建节点链接
// ! 问题：当链表过长，拼接成的数字过大超过 Number 安全范围，报错
var addTwoNumbers = function (l1, l2) {
  const num1 = [], num2 = [];
  while (l1) {
    num1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    num2.push(l2.val);
    l2 = l2.next;
  }

  let n1 = 0, n2 = 0;
  for (let i = 0; i < num1.length; i++) {
    n1 += num1[i] * 10 ** i;
  }
  for (let i = 0; i < num2.length; i++) {
    n2 += num2[i] * 10 ** i;
  }

  const sum = n1 + n2;
  const sumStr = String(sum);
  const n = sumStr.length;
  const sentinel = new ListNode(0);
  let curr = sentinel;
  for (let i = n - 1; i >= 0; i--) {
    const digit = Number(sumStr[i]);
    curr.next = new ListNode(digit);
    curr = curr.next;
  }

  return sentinel.next;
};

// & 1. 进位模拟 + 迭代 时间 O(m + n) 空间 O(1)
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  // carry 用来记录进位
  let curr = dummy, carry = 0;
  while (l1 || l2 || carry) {
    // 当前位上的数字相加，再加上上一位求和时的进位
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // 取余得到节点值
    curr.next = new ListNode(sum % 10);
    // 得到下一轮的进位
    carry = Math.floor(sum / 10);
    // 移动结果链表和原链表指针
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
};

// & 2. 递归 时间 O(m + n) 空间 O(m +n)
var addTwoNumbers = function (l1, l2, carry = 0) {
  // 终止条件：两条链表都空且进位为 0
  if (l1 === null && l2 === null && carry === 0) return null;

  // 单层逻辑：求出当前数位的和(包括进位)
  // 求和需要 节点值 + 进位
  let sum = carry;
  // 链表还有没遍历的节点，加到 sum 上
  if (l1) {
    sum += l1.val;
    l1 = l1.next;
  }
  if (l2) {
    sum += l2.val;
    l2 = l2.next;
  }

  // 递：进位值 carry + 剩余链表部分
  // 归：每层归返回一个以当前位数字为节点的新 ListNode，并把 next 指向递归结果
  return new ListNode(sum % 10, addTwoNumbers(l1, l2, Math.floor(sum / 10)));
}