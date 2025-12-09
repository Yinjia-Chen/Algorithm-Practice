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
 * @return {number[][]}
 */
// 二叉树的层序遍历 == BFS（广度优先搜索）
var levelOrder = function(root) {
  if (!root) return [];

  const ans = [];

  let curLevel = [root];
  while (curLevel.length) {
    const nxtLevel = [];
    const vals = [];
    for (const node of curLevel) {
      vals.push(node.val);
      if (node.left) nxtLevel.push(node.left);
      if (node.right) nxtLevel.push(node.right);
    }
    curLevel = nxtLevel;
    ans.push(vals);
  }

  return ans;
};