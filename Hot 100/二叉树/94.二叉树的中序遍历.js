/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// & 1. 递归 
var inorderTraversal = function (root) {
  // 结果数组
  const mid = [];
  // 递归开始：实际上是深度优先遍历算法 DFS
  // 终止条件：当前节点为空，直接返回
  // 根节点 与 左右子树的关系：整个二叉树都是由 “左子树 + 根节点 + 右子树” 组成
  // 中序遍历：左子树 -> 根 -> 右子树
  // 因此递归先进入左子树，接着到 根节点，再进入 右子树
  const dfs = (node) => {
    // 终止条件
    if (!node) return;
    // 中序遍历：左 根 右
    dfs(node.left);
    mid.push(node.val); // 归：将节点值推入数组
    dfs(node.right);
  };
  // 对 root 为根节点的树开展中序遍历
  dfs(root);
  return mid;
};

// 迭代
// Morris