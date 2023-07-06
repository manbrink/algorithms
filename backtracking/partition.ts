function partition(s: string): string[][] {
  let res = [];
  let partition = [];

  backtrack(0);

  function backtrack(i: number) {
    if (i >= s.length) {
      res.push([...partition]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        partition.push(s.slice(i, j + 1));
        backtrack(j + 1);
        partition.pop();
      }
    }
  }

  function isPalindrome(s: string, i: number, j: number) {
    while (i <= j) {
      if (s[i] !== s[j]) {
        return false;
      }

      i += 1;
      j -= 1;
    }

    return true;
  }

  return res;
}

/*

Given a string s, partition s such that every substring of the partition is a  palindrome

Return all possible palindrome partitioning of s.

-

single char is a palindrome.

'return all possible solutions' hints at backtracking.

-

base case: partition where each char is by itself:

"abba"

[a, b, b, a]

start with full string, check if palindrome

"abba"

add to result , res = [["abba"]]





*/
