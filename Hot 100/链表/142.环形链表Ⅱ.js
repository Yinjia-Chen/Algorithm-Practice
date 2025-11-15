/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// & 1.哈希表  时间 O(N) 空间 O(N)
// 这里 map 校验时，必须要用 map.has：当索引为 0 时，if(0) 判断为假，将无法正确返回
var detectCycle = function (head) {
  const map = new Map();
  let curr = head;
  let pos = -1;
  while (curr) {
    pos++;
    if (map.has(curr)) return curr;
    map.set(curr, pos)
    curr = curr.next;
  }
  return null;
};

// & 2.快慢指针 时间 O(n) 空间 O(1) Floyd判圈算法
var detectCycle = function(head) {
    let slow = head, fast = head, p=head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) { // 相遇
            while (slow !== p) { // 再走 a 步
                slow = slow.next;
                p = p.next;
            }
            return slow;
        }
    }
    return null;
};