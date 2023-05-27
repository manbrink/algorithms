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

function isBalanced(root: TreeNode | null): boolean {
  let balanced = true;
  dfs(root);
  return balanced;

  function dfs(root: TreeNode) {
    if (root === null) {
      return 0;
    }

    let leftHeight = dfs(root.left);
    let rightHeight = dfs(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      balanced = false;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

/*

Height-Balanced: A height-balanced binary tree is a binary tree in which the depth 
of the two subtrees of every node never differs by more than one.

-

dfs post order traversal:

  - bottom up, get the height of each subtree (base case return 0 (or 1?))
  - after recursive calls to left and right, compare their height return values.  if they differ by more than 1, return false.

*/
