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
 * @return {number}
 */
// & 1. 递归 时间 O(n) 空间 o(n)
var maxDepth = function(root) {
  let ans = 0;
  const dfs = (node,depth) => {
    if (!node) return ;
    depth++;
    ans = Math.max(ans, depth);
    dfs(node.left, depth);
    dfs(node.right, depth);
  }
  dfs(root, 0);
  return ans;
};