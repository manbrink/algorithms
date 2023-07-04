function letterCombinations(digits: string): string[] {
  let res = [];
  let letterMap = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  if (!digits) {
    return res;
  }

  backtrack(digits, "");

  function backtrack(digits: string, candidate: string) {
    if (!digits) {
      res.push(candidate);
      return;
    }

    let ch = digits[0];
    let options = letterMap.get(ch);

    for (let option of options) {
      backtrack(digits.slice(1), candidate + option);
    }
  }

  return res;
}

/*

'letter combinations' hints at backtracking.

-

range is 2 - 9 inclusive

-

each digit maps to three letters. so an input of '23' gives us 'abcdef' as the chars we want to find all combinations of.

each letter associated with a number can be mapped to each letter of the other sets.

for each of ['abc', 'def']

  for each letter in the combo (say 'abc')

    combine it with each letter of each combo occuring after it (prevent duplicates)




*/
