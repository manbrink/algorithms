function longestPalindrome(s: string): number {
  let m = new Map<string, number>();

  for (let c of s) {
    m.set(c, m.has(c) ? m.get(c) + 1 : 1);
  }

  let hasOdd = false;
  let pairsCount = 0;
  for (const key of m.keys()) {
    pairsCount += Math.floor(m.get(key) / 2); // we count the number of pairs for add and even freqs

    if (m.get(key) % 2 !== 0) {
      hasOdd = true;
    }
  }

  return hasOdd ? pairsCount * 2 + 1 : pairsCount * 2;
}

/*

Input: s = "abccccddfffkkkkk"

{
  a: 1, pairsCount += 0
  b: 1, pairsCount += 0
  c: 4, pairsCount += 2
  d: 2, pairsCount += 1
  f: 3, pairsCount += 1
  k: 5 pairsCount += 2
}

kkccdfkfdcckk

lp = 13

Given a string s which consists of lowercase or uppercase letters, return the length of the 
longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

* you don't have to use all occurrences of a letter in the final palindrome*

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Input: s = "abccccddf"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

-

for a combination of letters to make a palindrome:

  - must have at most one letter with odd frequency of ocurrences

create a frequency map for each character then count the number of pairs that exist, and multiply it by 2 to get the LP.  add 1 if an
odd frequency was detected.

{
  a: 1,
  b: 1,
  c: 4,
  d: 2
}

*/
