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
// 现在比较的是 root 的左右子树，因此 isSameTree 的参数要改造成 左右子树的镜像对比（也就是默认 p 和 q 相同）
const isSameTree = (p, q) => {
  if (p === null || q === null) return p === q;
  return p.val === q.val && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
}

var isSymmetric = function (root) {
  return isSameTree(root.left, root.right);
};