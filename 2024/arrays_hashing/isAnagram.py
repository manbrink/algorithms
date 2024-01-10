class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):
      return False
    
    s_frequencies = dict()
    
    for ch in s:
      s_frequencies.setdefault(ch, 0)
      s_frequencies[ch] += 1
    
    for ch in t:
      if ch in s_frequencies:
        if s_frequencies[ch] > 0:
          s_frequencies[ch] -= 1
        else:
          return False
      else:
        return False
    
    return True
    
"""
  essentially testing whether s and t have the same frequency of characters.
  
  most efficient way to do this: 
  
    make a frequency dict of chars in s.  
  
    for each char of t, check its inclusion in a's frequency dict.  if it is not present, return False.
    if it is present, check the corresponding value.  if the value is 0, return false (can't decrement any
    more), otherwise decrement the value by 1.
    
    return true by default
    
    time: O(len(s) + len(t))
    space: O(len(s))
"""