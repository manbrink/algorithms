function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let i = 0;

  while (i < s.length) {
    let substr = s[i];
    let k = i + 1;

    while (k < s.length && substr.indexOf(s[k]) === -1) {
      substr += s[k];
      k++;
    }

    if (substr.length > longest) {
      longest = substr.length;
    }

    i++;
  }

  return longest;
}

/*

Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcaaa"
Output: 3

Input: s = "abcdef"
Output: 6

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 
-

let longest = 0

while i < s.length:

  create substr starting at s[i]

  for each element k in front of i:

    if substr still has unique elements after adding this element, add to substr, continue

    if substr would not have unique elements:
    
      check substr length against longest found, if longer than longest, update longest.  set i = k.  break.
*/
