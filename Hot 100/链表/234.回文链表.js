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

// & 2.快慢指针 
var isPalindrome = function (head) {
  
}