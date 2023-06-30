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

function isValidBST(root) {
  return isValidBSTHelper(root, null, null);
}

function isValidBSTHelper(node, min, max) {
  if (node === null) {
    return true;
  }

  if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
    return false;
  }

  return (
    isValidBSTHelper(node.left, min, node.val) &&
    isValidBSTHelper(node.right, node.val, max)
  );
}

// function isValidBST(root: TreeNode | null): boolean {
//   if (!root) {
//     return true;
//   }

//   if (!root.left && !root.right) {
//     return true;
//   }

//   let leftValid = isValidBST(root.left);
//   let rightValid = isValidBST(root.right);

//   if (leftValid && rightValid && isValidBSTNode(root)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isValidBSTNode(root: TreeNode): boolean {
//   let valid = true;

//   if (root.left && root.val <= root.left.val) {
//     valid = false;
//   }

//   if (root.right && root.val >= root.right.val) {
//     valid = false;
//   }

//   return valid;
// }

/*

divide and conquer:

  if left and right subtrees are null, return true

    we could choose to not make recursive call if they are null - but this handles case where tree hase one node.

  recursively check left and right subtree from root to see if they are valid.

  if they are valid, and root.val > root.left.val and root.val < root.right.val : return true



*/
