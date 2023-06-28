function permuteUnique(nums) {
  let numMap = new Map();
  let uniquePerms = [];
  let perm = [];

  for (let num of nums) {
    let val = numMap.get(num);

    if (val) {
      numMap.set(num, val + 1);
    } else {
      numMap.set(num, 1);
    }
  }

  function dfs() {
    if (perm.length === nums.length) {
      uniquePerms.push([...perm]);
      return;
    }

    numMap.forEach((val, key) => {
      if (val > 0) {
        perm.push(key);
        numMap.set(key, val - 1);

        dfs();

        numMap.set(key, val);
        perm.pop();
      }
    });
  }

  dfs();

  return uniquePerms;
}

function permuteUniqueFirstAttempt(nums: number[]): number[][] {
  let permMap: Map<string, number[]> = new Map();
  let k = nums.length;

  permute(nums);

  function permute(nums: number[]) {
    if (nums.length === 0) {
      return [[]];
    }

    let perms = permute(nums.slice(1));
    let newPerms = [];

    for (let perm of perms) {
      for (let i = 0; i < perm.length + 1; i++) {
        let newPerm = [...perm];
        newPerm.splice(i, 0, nums[0]);
        let newPermKey = [...newPerm].join();

        newPerms.push(newPerm);

        if (!permMap.get(newPermKey) && newPerm.length === k) {
          permMap.set(newPermKey, newPerm);
        }
      }
    }

    return newPerms;
  }

  return Array.from(permMap.values());
}

/*

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

-

backtracking + store perms and check map before adding new ones

-

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

keep permMap in outer scope

base case, nums = []:

  nums is empty, return [[]]

nums = [3]:

  for each perm returned from base case:

    add nums[0] at each array index (splice).  check if exists in map, if not add it to map.

  return the new perms from recursive call

return keys of permMap

*/
