// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

const MOD_1: number = 1_000_000_007;
const MOD_2: number = 2_147_483_647;

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const memo: Set<[number, number]> = new Set();

  const hashSubtreeAtNode = (
    node: TreeNode | null,
    needToAdd: boolean
  ): [number, number] => {
    if (node === null) {
      return [3, 7];
    }

    const left = hashSubtreeAtNode(node.left, needToAdd);
    const right = hashSubtreeAtNode(node.right, needToAdd);

    const left_1 = (left[0] << 5) % this.MOD_1;
    const right_1 = (right[0] << 1) % this.MOD_1;
    const left_2 = (left[1] << 7) % this.MOD_2;
    const right_2 = (right[1] << 1) % this.MOD_2;

    const hashpair: [number, number] = [
      (left_1 + right_1 + node.val) % this.MOD_1,
      (left_2 + right_2 + node.val) % this.MOD_2,
    ];

    if (needToAdd) {
      memo.add(hashpair);
    }

    return hashpair;
  };

  hashSubtreeAtNode(root, true);
  const s = hashSubtreeAtNode(subRoot, false);

  return memo.has(s);
}
