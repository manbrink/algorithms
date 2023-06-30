// bottom up iterative (queue)
function sortArrayIterative(nums: number[]): number[] {
  let queue = nums.map((num) => [num]);

  while (queue.length > 1) {
    let leftSorted = queue.shift();
    let rightSorted = queue.shift();
    let result = [];

    while (leftSorted.length > 0 && rightSorted.length > 0) {
      if (leftSorted[0] < rightSorted[0]) {
        result.push(leftSorted.shift());
      } else {
        result.push(rightSorted.shift());
      }
    }

    if (leftSorted.length > 0) {
      result = [...result, ...leftSorted];
    } else if (rightSorted.length > 0) {
      result = [...result, ...rightSorted];
    }

    queue.push(result);
  }

  return queue[0];
}

/*

start with array split into arrays of one element.

put them all in an array that will function as a queue.

while the queue's length is > 1, pop out two elements at a time:

  do the same comparison as recursive version to create the new sorted result that is combination of the two.

  enqueue the result.

return the first element of the queue

*/

// top down recursive
function sortArray(nums: number[]): number[] {
  if (nums.length === 1) {
    return nums;
  }

  let midIdx = Math.floor(nums.length / 2);

  let leftSorted = sortArray(nums.slice(0, midIdx));
  let rightSorted = sortArray(nums.slice(midIdx));
  let result = [];

  while (leftSorted.length > 0 && rightSorted.length > 0) {
    if (leftSorted[0] < rightSorted[0]) {
      result.push(leftSorted.shift());
    } else {
      result.push(rightSorted.shift());
    }
  }

  if (leftSorted.length > 0) {
    result = [...result, ...leftSorted];
  }

  if (rightSorted.length > 0) {
    result = [...result, ...rightSorted];
  }

  return result;
}

/*

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) 
time complexity and with the smallest space complexity possible.

-

divide and conquer: merge sort (top down):

recursively divide nums array into halves and sort each half, then merge the sorted halves.  

  base case is an array with one element because it is sorted by definition.  
-

Input: nums = [5,2,3,1]
Output: [1,2,3,5]

sortArray([5, 2])
sortArray([3, 1])

// base cases
sortArray([5])
sortArray([2])

  while one of the arrays has length > 0, compare first element of both arrays.  push smaller into result.
  if one of the arrays is empty, merge in the second array in full since we know all those elements are larger than 
  current result.

  2 < 5, so return [2, 5]

sortArray([3])
sortArray([1])

  1 < 3, so return [1, 3]

...

*/
