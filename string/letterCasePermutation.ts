function letterCasePermutation(s: string): string[] {
  if (!s) {
    return [""];
  } else {
    let ch = s[0];
    let perms = letterCasePermutation(s.slice(1));

    let newPerms = [];
    let isNum = !isNaN(parseInt(ch));
    for (let p of perms) {
      if (isNum) {
        newPerms.push(ch + p);
      } else {
        newPerms.push(ch.toLowerCase() + p);
        newPerms.push(ch.toUpperCase() + p);
      }
    }

    return newPerms;
  }
}

/*

Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

-

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

can only change letters, not numbers

-

"a" all permutations + all permutations of "1b2"

  return "a1b2", "a1B2", "A1b2", "A1B2"

"1" all permutations + all permutations of "b2"

  return "1b2", "1B2"

"b" all permutations + all permutations of "2"

  return "b2", "B2"

"2" all permutations

  return "2"


*/
