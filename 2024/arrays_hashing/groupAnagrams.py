from collections import defaultdict

# O(len(strs) * avg len of a str)
# beats 74/42 (?)
class Solution:
  def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    output_map = defaultdict(list)
    
    for c_str in strs:
      count = [0] * 26 # only a-z
      
      for ch in c_str:
        count[ord(ch) - ord("a")] += 1
      
      output_map[str(count)].append(c_str)
        
    return list(output_map.values())
        
# O(len(strs) * len(str)log(str)) for sorting each one
# beats 80/58
class Solution:
  def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    output_map = dict()
    output = []
    
    for c_str in strs:
      sorted_str = ''.join(sorted(c_str))
      
      if sorted_str in output_map:
        output[output_map[sorted_str]].append(c_str)
      else:
        output.append([c_str])
        output_map[sorted_str] = len(output) - 1
    
    return output
    
"""
  more useful definition of anagram: word2 has same frequency of letters as word1 
  and same total number of letters.
  
  how do we know to make a new group or put into an existing group?  dict?
  
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  encounter "eat", e=1 a=1 t=1, any group with same frequencies?  (also need to know group's
  idx in output arr)
  
    may be too expensive, but could sort letters of str and store that as key with output arr idx as value.
    
    "aet" does not exist.
    
      push "eat" into output arr in new arr.
    
      add "aet" as a key with value = output length - 1.
    
    next would be "tea".  now, "aet" does exist, so push "tea" into its corresponding value, which is 0.

"""