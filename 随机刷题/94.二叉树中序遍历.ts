// 二叉树基础思想：递归 ==》 二叉树的每一个节点都类似，有左右子节点和值，递归思想用来解决“父问题 & 子问题相似”的

// 1.0 基础递归   时空复杂度 O(N)
function inorderTraversal(root: TreeNode | null): number[] {
  const res: Array<number> = [];

  // 定义获取中序遍历的方法
  const dfs = (current: TreeNode | null) => {
  	// 遍历到空节点开始归 ==》 递归终止条件
    if (!current) {
      return;
    }

    // 中序遍历的结果 ==》 左子节点 父节点 右子节点
    dfs(current.left);
    res.push(current.val);
    dfs(current.right);
  }

  // 调用获取中序遍历结果的方法
  dfs(root);
  return res;
};

// 1.1 颜色标记法 白色表示未遍历，灰色表示已遍历  时空复杂度O(N)
type Color = 0 | 1; // 0: WHITE, 1: GRAY

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: Array<[Color, TreeNode | null]> = [[0, root]]; // [颜色, 节点] 根节点入栈
    
    while (stack.length > 0) {
        const [color, node] = stack.pop()!;
        if (node === null) continue;
        
        // 中序遍历：左 根 右，因此入栈顺序是 右 根 左
        if (color === 0) {
            // 先处理右子树
            stack.push([0, node.right]);
            // 标记当前节点为灰色
            stack.push([1, node]);
            // 最后处理左子树
            stack.push([0, node.left]);
        } else {
            result.push(node.val);
        }
    }
    
    return result;
} 

// 2.0 Morris 莫里斯算法
function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    let predecessor: TreeNode | null = null;

    while (root) {
        // 存在左子树时，寻找前驱节点
        if (root.left) {
            predecessor = root.left;
            // 找到左子树最右节点
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }

            // 建立线索（第一次访问）
            if (!predecessor.right) {
                predecessor.right = root;
                root = root.left;
            } 
            // 第二次访问，断开线索并访问当前节点
            else {
                res.push(root.val);
                predecessor.right = null;
                root = root.right;
            }
        } 
        // 无左子树时直接访问
        else {
            res.push(root.val);
            root = root.right;
        }
    }

    return res;
}