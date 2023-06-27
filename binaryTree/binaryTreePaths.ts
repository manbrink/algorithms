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

function binaryTreePaths(root: TreeNode | null): string[] {
  let paths = [];
  dfs(root, []);

  function dfs(root: TreeNode, path: string[]) {
    let newPath = [...path, root.val.toString()];

    if (root.left) {
      dfs(root.left, newPath);
    }

    if (root.right) {
      dfs(root.right, newPath);
    }

    if (!root.left && !root.right) {
      paths.push(newPath.join("->"));
    }
  }

  return paths;
}

/*

keep outer scope paths result array.

dfs:

  build path top down and use it as param in recursive call.

  if left and right children are null, add the current path to result.



*/
