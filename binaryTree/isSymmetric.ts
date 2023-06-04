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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root.left && !root.right) {
    return true;
  }

  const q = [];
  q.push(root.left);
  q.push(root.right);

  while (q.length > 0) {
    const node1 = q.shift();
    const node2 = q.shift();

    if (node1?.val !== node2?.val) {
      return false;
    } else {
      if (node1) q.push(node1.left);
      if (node2) q.push(node2.right);
      if (node1) q.push(node1.right);
      if (node2) q.push(node2.left);
    }
  }

  return true;
}
