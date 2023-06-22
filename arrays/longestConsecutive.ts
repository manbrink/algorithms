function longestConsecutive(nums: number[]): number {
  let numMap: Map<number, boolean> = new Map();
  let longestConsecutiveSequence: number = 0;

  for (let num of nums) {
    numMap.set(num, true);
  }

  for (let num of nums) {
    let curSequenceSize = 1;

    if (!numMap.get(num - 1)) {
      // num is the beginning of a sequence
      let searching = true;
      let curNum = num;

      while (searching) {
        if (numMap.get(curNum + 1)) {
          curSequenceSize += 1;
          curNum += 1;
        } else {
          if (curSequenceSize > longestConsecutiveSequence) {
            longestConsecutiveSequence = curSequenceSize;
          }
          searching = false;
        }
      }
    }
  }

  return longestConsecutiveSequence;
}

/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

-

O(n) - so no sorting, as fastest merge/quick sort would be O(nlogn)

-

create map of present values to true

iterate the elements again 

  if num - 1 exists in map, next. (not start of sequence)

  else check if num + 1 exists.  if it does, continue the check and update result for longest
seen so far.



*/
