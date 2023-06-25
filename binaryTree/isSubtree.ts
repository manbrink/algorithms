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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) {
    return true;
  }

  if (!root || !subRoot) {
    return false;
  }

  if (root.val === subRoot.val && isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(
  rootOne: TreeNode | null,
  rootTwo: TreeNode | null
): boolean {
  if (!rootOne && !rootTwo) {
    return true;
  }

  if (!rootOne || !rootTwo || rootOne.val !== rootTwo.val) {
    return false;
  }

  return (
    isSameTree(rootOne.left, rootTwo.left) &&
    isSameTree(rootOne.right, rootTwo.right)
  );
}

// function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
//   if (!root) {
//     return false;
//   }

//   if (root.val === subRoot.val) {
//     if (isSameTree(root, subRoot)) {
//       return true;
//     }
//   }

//   isSubtree(root.left, subRoot);
//   isSubtree(root.right, subRoot);

//   return false;
// }

// function isSameTree(
//   rootOne: TreeNode | null,
//   rootTwo: TreeNode | null
// ): boolean {
//   if (
//     (!rootOne && rootTwo) ||
//     (rootOne && !rootTwo) ||
//     rootOne?.val !== rootTwo?.val
//   ) {
//     return false;
//   }

//   isSameTree(rootOne?.left, rootTwo?.left);
//   isSameTree(rootOne?.right, rootTwo?.right);

//   return true;
// }

/*

1. look for subRoot starting at root

2. if it's found, check if the tree at found node and tree starting at subRoot are the same


*/
