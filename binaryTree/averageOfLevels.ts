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
 */ 6;

function averageOfLevels(root: TreeNode | null): number[] {
  let result: number[] = [];
  let currentLevel: number = 0;
  let currentSum: number = 0;
  let currentCount: number = 0;

  let queue: [[TreeNode, number]] = [[root, 0]];

  while (queue.length > 0) {
    let cur = queue.shift();
    let curNode = cur[0];
    let curNodeLevel = cur[1];

    if (curNodeLevel === currentLevel) {
      currentSum += curNode.val;
      currentCount += 1;
    } else if (curNodeLevel > currentLevel) {
      result.push(currentSum / currentCount);
      currentLevel += 1;
      currentSum = curNode.val;
      currentCount = 1;
    }

    if (curNode.left) queue.push([curNode.left, curNodeLevel + 1]);
    if (curNode.right) queue.push([curNode.right, curNodeLevel + 1]);
  }

  result.push(currentSum / currentCount);

  return result;
}

/*

Given the root of a binary tree, return the average value of the nodes
on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

-

'at each level' => BFS

-

track result array

use bfs to traverse each level (queue):

  how to track what level we are on?  what to divide by?

    enqueue nodes and their level: [node, level].  outside while loop track current level, current level sum, and count of nums.

    if a dequeued node has level > current level:

      compute the average and push to result array.  set current level to new level, sum and count to 0.

*/
