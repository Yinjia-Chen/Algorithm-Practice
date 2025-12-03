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
 * @return {boolean}
 */
// 时空 O(N)
// 判断 root 的左右子树是否互为镜像（mirror）
// isMirror(p, q): 检查以 p、q 为根的两棵树是否互为镜像
const isMirror = (p, q) => {
  if (p === null || q === null) return p === q;
  return p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left);
}

var isSymmetric = function (root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
};