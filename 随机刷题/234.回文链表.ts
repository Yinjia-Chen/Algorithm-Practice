// 1.0 暴力解：遍历链表，节点元素存入数组，双指针遍历数组，检查数组是否回文
//     时间：O(N)   空间：O(N)
function isPalindrome(head: ListNode | null): boolean {
  let cur = head;
  let elementArr: number[] = []; // 创建空数组,存放链表节点元素
  while (cur) {
    elementArr.push(cur.val);
    cur = cur.next;
  }

  // 双指针检查数据是否回文
  let p1 = 0;
  let p2 = elementArr.length - 1;
  while (p1 < p2) {
    if (elementArr[p1] !== elementArr[p2]) {
      return false
    } else {
      p1++;
      p2--;
    }
  }

  return true;
};

// 2.0 优化
function isPalindrome(head: ListNode | null): boolean {
  if (!head) return null
  let slow: ListNode = head;
  let quick: ListNode = head;

  // 快慢指针遍历链表，快指针到链表末端时慢指针到达链表中点
  while (quick.next && quick.next.next) {
    slow = slow.next;
    quick = quick.next.next;
  }

  // cur指向链表中点
  let cur = slow;
  let prev = null;
  // 反转后半段链表
  while (cur) {
    let nextNode = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextNode;
  }

  while (prev && head) {
    if (prev.val != head.val) {
      return false
    }
    prev = prev.next
    head = head.next
  }

  return true
};