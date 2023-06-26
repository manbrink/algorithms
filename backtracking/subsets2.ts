function subsetsWithDup(nums: number[]): number[][] {
  var subsetMap = new Map<string, boolean>();

  return subsets(nums, subsetMap);
}

function subsets(nums: number[], subsetMap: Map<string, boolean>): number[][] {
  if (nums.length === 0) {
    return [[]];
  }

  let subs = subsets(nums.slice(1), subsetMap);
  let result = [];

  for (let sub of subs) {
    result.push(sub);
    let newSub = [...sub, nums[0]].sort((a, b) => a - b);
    let newSubKey = newSub.join("");

    if (!subsetMap.has(newSubKey)) {
      subsetMap.set(newSubKey, true);
      result.push(newSub);
    }
  }

  return result;
}

/*

remove duplicates then calculate subsets.  probably inefficient.

-

store subsets that have been added to result in Map?  some may have the same elements, but in different order.  



*/
