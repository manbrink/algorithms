function lengthOfLIS(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }

  let L = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    L[i] = 1;

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && L[i] < 1 + L[j]) {
        L[i] = 1 + L[j];
      }
    }
  }

  let max = L[0];
  for (let i = 1; i < L.length; i++) {
    if (L[i] > max) {
      max = L[i];
    }
  }

  return max;
}

/*

[0, 1, 0, 3, 2, 3]

debug: { '1': 1, '2': 1, '3': 2, '4': 2, '5': 3 }

i = 4
j = 1
{ '1': 1, '2': 1, '3': 2, '4': 1}


*/

// at most N^2 substrings

// subsequence elements do not have to be consecutive, just in order

/*

DP recipe:

1. define subproblem: 

  use identical problem on prefix of input
  
  L(i) = lengthOfLIS on a1, a2, ..., ai (including ai)

2. state recursive relation: 

  express L(i) in terms of L(1), ..., L(i - 1)

  L(i) = 1 + length of longest subsequence before i, with last value being < value at i

*/
