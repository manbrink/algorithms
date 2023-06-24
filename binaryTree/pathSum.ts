/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  let hasPath = false;

  function dfs(node: TreeNode, currentSum: number) {
    if (!node.left && !node.right && currentSum === targetSum) {
      hasPath = true;
      return;
    }

    if (node.left) {
      dfs(node.left, currentSum + node.left.val);
    }

    if (node.right) {
      dfs(node.right, currentSum + node.right.val);
    }
  }

  dfs(root, root.val);

  return hasPath;
}

/*

iterate pre-order traversal down the tree

  pass current sum for each path.

  if root val + current sum === target and root.left and right are null - haspath is true


*/
