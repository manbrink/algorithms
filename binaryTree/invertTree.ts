class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// time: O(n)
// space: O(n) recursive stack space
function invertTreeTopDown(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  [root.left, root.right] = [root.right, root.left];

  invertTreeTopDown(root.left);
  invertTreeTopDown(root.right);

  return root;
}

// time: O(n)
// space: O(n) recursive stack space
function invertTreeBottomUp(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  invertTreeBottomUp(root.left);
  invertTreeBottomUp(root.right);

  [root.left, root.right] = [root.right, root.left];

  return root;
}

function invertTreeIterative(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  let q = [];
  q.push(root);
  while (q.length > 0) {
    let cur = q.shift();
    let temp = cur.left;
    cur.left = cur.right;
    cur.right = temp;

    if (cur.left) {
      q.push(cur.left);
    }
    if (cur.right) {
      q.push(cur.right);
    }
  }

  return root;
}

/*

Given the root of a binary tree, invert the tree, and return its root.

analysis:

  tree ds: probably bfs, dfs, recursion

  at each node, swap its children.  inverted


*/
