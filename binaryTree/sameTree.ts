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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  }

  const queue = [];
  let isSame = true;

  queue.push(p);
  queue.push(q);

  while (queue.length !== 0) {
    let nodeOne = queue.shift();
    let nodeTwo = queue.shift();

    if (nodeOne && nodeTwo && nodeOne.val !== nodeTwo.val) {
      isSame = false;
    }

    if (nodeOne.left && nodeTwo.left) {
      queue.push(nodeOne.left);
      queue.push(nodeTwo.left);
    } else if (
      (!nodeOne.left && nodeTwo.left) ||
      (nodeOne.left && !nodeTwo.left)
    ) {
      isSame = false;
    }

    if (nodeOne.right && nodeTwo.right) {
      queue.push(nodeOne.right);
      queue.push(nodeTwo.right);
    } else if (
      (!nodeOne.right && nodeTwo.right) ||
      (nodeOne.right && !nodeTwo.right)
    ) {
      isSame = false;
    }
  }

  return isSame;
}

// [1, 2]
// [1, null, 2]
