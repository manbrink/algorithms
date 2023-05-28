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

function lowestCommonAncestorBetter(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let current: TreeNode = root;

  while (current != null) {
    if (p.val > current.val && q.val > current.val) {
      current = current.right;
    } else if (p.val < current.val && q.val < current.val) {
      current = current.left;
    } else {
      return current;
    }
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let pAn = [];
  let qAn = [];

  // binsearch for p
  let rootCpy = root;
  while (rootCpy.val && rootCpy.val !== p.val) {
    pAn.push(rootCpy);
    if (p.val < rootCpy.val) {
      rootCpy = rootCpy.left;
    } else {
      rootCpy = rootCpy.right;
    }
  }
  if (rootCpy.val === p.val) {
    pAn.push(rootCpy);
  }

  // binsearch for q
  let rootCpy2 = root;
  while (rootCpy2.val && rootCpy2.val !== q.val) {
    qAn.push(rootCpy2);
    if (q.val < rootCpy2.val) {
      rootCpy2 = rootCpy2.left;
    } else {
      rootCpy2 = rootCpy2.right;
    }
  }
  if (rootCpy2.val === q.val) {
    qAn.push(rootCpy2);
  }

  let LCA = root;
  for (const node of pAn) {
    if (qAn.includes(node) && (node.val > LCA.val || node.val < LCA.val)) {
      LCA = node;
    }
  }

  return LCA;
}

/*

BST, so use binary search.

binary search for each node, tracking all the ancestors.

iterate the ancestors of one of the nodes: check if each one exists in ancestors of the other.  if it does and is larger than 
current largest ancestor (by val) then set largest = it.



*/
