function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  let perms = permute(nums.slice(1));
  let newPerms = [];

  for (let perm of perms) {
    for (let i = 0; i < perm.length + 1; i++) {
      let newPerm = perm.slice();
      newPerm.splice(i, 0, nums[0]);
      newPerms.push(newPerm);
    }
  }

  return newPerms;
}

/*

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Input: nums = [1]
Output: [[1]]

-

nums.length >= 1, so base case is just [[nums[0]]]

for each additional element, add it at at each index of each perm

...

Input: nums = [1,2,3]

base case: [3]

  return [[3]]

case: [2, 3]

  insert 2 at each index of each perm returned by base case recursive call:

    [[2, 3], [3, 2]]

case: [1, 2, 3]:

  insert 1 at 0, 1, 2.  so 3 indices * 2 returned perms = 6 new perms:

  [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/
