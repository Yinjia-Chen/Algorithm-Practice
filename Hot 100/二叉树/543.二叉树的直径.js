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
var diameterOfBinaryTree = function(root) {
  let ans = 0;
  function dfs(node) {
    if (node === null) return -1;
    const lLen = dfs(node.left) + 1;
    const rLen = dfs(node.right) + 1;
    ans = Math.max(ans, lLen + rLen);
    return Math.max(lLen, rLen);
  }
  dfs(root);
  return ans;
};