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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  let levelNodes: number[][] = [];
  let q: TreeNode[] = [root];

  while (q.length > 0) {
    const levelSize = q.length;
    let currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      let node = q.shift();

      currentLevel.push(node.val);

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }

    levelNodes.push(currentLevel);
  }

  return levelNodes;
}

/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]



Input: root = [1]
Output: [[1]]

Input: root = []
Output: []



---

wrong:

[3,9,20,null,null,15,7]

got: [[3],[9,20],[],[15,7],[],[]]

expected: [[3],[9,20],[15,7]]

bug: pushing empty arrays


wrong:

input: [1,2,3,4,null,null,5]

got: [[1],[2,3],[4],[5]]

expected: [[1],[2,3],[4,5]]

bug: node vals on same level are getting pushed into result array as if they are in different levels

*/
