function subsets(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [[]];
  }

  let subs = subsets(nums.slice(1));
  let res: number[][] = [];

  for (let sub of subs) {
    res.push(sub);
    res.push([...sub, nums[0]]);
  }

  return res;
}

// function subsets(nums: number[]): number[][] {
//   if (nums.length === 0) {
//     return [[]];
//   }

//   let subs = subsets(nums.slice(1));
//   let res = [...subs];

//   for (let sub of subs) {
//     sub.push(nums[0]);
//     res.push(sub);
//   }

//   return res;
// }

/*

[1, 2, 3]

base case: return [[]]

nums [3]

  subs = [[]]

  [].push(3)

nums [2, 3]

  subs = [[], [3]]

  [].push(2)

  [3].push(2)




*/
