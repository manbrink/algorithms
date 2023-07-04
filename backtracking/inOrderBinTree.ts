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

// iterative with stack
function inorderTraversalIterative(root: TreeNode | null): number[] {
  let res = [];
  const queue = [];
  let currentNode = root;

  while (currentNode !== null || queue.length > 0) {
    if (currentNode !== null) {
      queue.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = queue.pop();
      res.push(currentNode.val);
      currentNode = currentNode.right;
    }
  }

  return res;
}

function inorderTraversal(root: TreeNode | null): number[] {
  let result = [];
  inorderDfs(root);

  function inorderDfs(root: TreeNode | null): void {
    if (!root) {
      return;
    }

    inorderDfs(root.left);
    result.push(root.val);
    inorderDfs(root.right);
  }

  return result;
}

/*

Given the root of a binary tree, return the inorder traversal of its nodes' values.

-

inorder: left sub, root, right sub

iterative approach:




*/
