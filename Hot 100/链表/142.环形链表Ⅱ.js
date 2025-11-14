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