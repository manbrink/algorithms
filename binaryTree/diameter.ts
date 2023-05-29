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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;
  dfs(root);
  return diameter;

  function dfs(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    const leftHeight = dfs(root.left);
    const rightHeight = dfs(root.right);

    if (leftHeight + rightHeight > diameter) {
      diameter = leftHeight + rightHeight;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }
}

/*

answer is the max sum of left height and right height at any given node.

*/
