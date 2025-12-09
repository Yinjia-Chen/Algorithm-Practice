/**
 * BFS：广度优先搜索(层序遍历 levelOrder)
 * @param {TreeNode} root 
 */
// & 1.队列 时空 O(n)
// 全局外部 head 指针，始终不重置，表示遍历到的某一层的首节点
// 全局数组 queque 队列，存放将要按顺序遍历的节点
// 层级元素 size，表示当前层级有多少节点待遍历
// 层级数组 vals，存放当前层遍历到的节点 val
// 外层循环：循环层级，head没到队列末尾就说明还有节点没遍历，内层结束，vals 存放了当前层的遍历结果，推入结果数组
// 内层循环：根据 size 遍历当前层的节点并取出节点val 维护 vals，同时取出遍历节点的左右子节点存进队列，
var bfs = function (root) {
  if (!root) return [];

  const ans = [];
  const queue = [root];
  let head = 0;
  while (head < queue.length) {
    const size = queue.length - head;
    const vals = [];
    for (let i = 0; i < size; i++){
      const node = q[head++];
      vals.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(vals);
  }
  return ans;
}


// & 2.双数组 时空 O(n)
var bfs = function (root) {
  if (!root) return [];

  const ans = [];
  let curLevel = [root];
  while (curLevel.length) {
    const vals = [];
    const nxtLevel = [];
    for (const node of curLevel) {
      vals.push(node.val);
      if (node.left) nxtLevel.push(node.left);
      if (node.right) nxtLevel.push(node.right);
    }
    curLevel = nxtLevel;
    ans.push(vals);
  }
  
  return ans;
}