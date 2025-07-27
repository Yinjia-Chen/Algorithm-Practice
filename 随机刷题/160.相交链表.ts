// 哈希集合
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const set: Set<ListNode> = new Set(); // 新建哈希表
  let current: ListNode | null = headA;
  while (current !== null) {
    // 存入链表A所有节点
    set.add(current);
    current = current.next;
  }

  current = headB;
  while (current !== null) {
    if (set.has(current)) {
      return current;
    }
    current = current.next;
  }
  return null;
};

// 双指针 
// 时间复杂度：O(N)
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA == null || headB == null) return null;
  let currentA: ListNode = headA; // 创建链表A的指针
  let currentB: ListNode = headB; // 创建链表B的指针

  // 未找到重合节点
  while (currentA !== currentB) {
    currentA = currentA === null ? headB : currentA.next; // 遍历链表A,遍历结束后遍历链表B
    currentB = currentB === null ? headA : currentB.next; // 遍历链表B,遍历简历后遍历链表A
  }

  // 此时curA和curB指向相同节点,返回结果即可
  return currentA;
};
