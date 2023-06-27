function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i += 1;
    }
    j += 1;
  }

  if (i === s.length) {
    return true;
  } else {
    return false;
  }
}

/*

Input: s = "axc", t = "ahbgdc"
Output: false

Input: s = "abc", t = "ahbgdc"
Output: true


*/

/*

time: O(s.length + t.length)
space: O(s.length)

*/

function isSubsequenceMap(s: string, t: string): boolean {
  let sMap = new Map<number, string>();

  for (let i = 0; i < s.length; i++) {
    sMap.set(i, s[i]);
  }

  let i = 0;
  while (t.length > s.length) {
    if (t[i] === s[i] && sMap.get(i) === s[i]) {
      i += 1;
    } else {
      t = t.replace(t[i], "");
    }
  }

  if (s === t) {
    return true;
  } else {
    return false;
  }
}

/*

if s has duplicate chars, this map does not work as they get reset in construction.  use index -> char instead.

-

Input: s = "abc", t = "ahbgdc"
Output: true

sMap = {a: 0, b: 1, c: 2}

iterate chars of t:

  a is correct char in correct position, i += 1
  h incorrect, delete
  b is correct char in correct position, i += 1
  g incorrect, delete
  d incorrect, delete
  c is correct char in correct position, i += 1

-

Input: s = "axc", t = "ahbgdc"
Output: false

sMap = {a: 0, x: 1, c: 2}

  a is correct char in correct position, i += 1
  h incorrect, delete
  b incorrect, delete
  g incorrect, delete
  d incorrect, delete
  

-

what if chars of 't' not unique?

Input: s = "abc", t = "ahbgdccc"
Output: true

-

also need chars to appear in correct order:

  - if using a map for chars of s, store indices as value?  indices in t might be different initially, but 
  have to be correct after deletions.  iterate with while loop: while t.length > s.length.


*/
