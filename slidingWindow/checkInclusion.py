from collections import Counter


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        len_s1 = len(s1)
        len_s2 = len(s2)

        if len_s1 > len_s2:
            return False

        f_map = Counter(s1)
        window = Counter(s2[:len_s1])

        for idx in range(len_s1, len_s2):
            if window == f_map:
                return True

            end_ch = s2[idx]
            start_ch = s2[idx - len_s1]

            if window[start_ch] == 1:
                del window[start_ch]
            else:
                window[start_ch] -= 1

            if end_ch in window:
                window[end_ch] += 1
            else:
                window[end_ch] = 1

        return window == f_map

# from collections import Counter


# class Solution:
#     def checkInclusion(self, s1: str, s2: str) -> bool:
#         f_map = Counter(s1)
#         len_s1 = len(s1)
#         len_s2 = len(s2)

#         for idx, ch in enumerate(s2):
#             if f_map[ch] != 0:
#                 f_map_c = f_map.copy()
#                 s, e = idx - 1, idx + 1

#                 f_map_c[ch] -= 1
#                 search_left = True
#                 search_right = True

#                 while s - e + 1 < len_s1 and (search_left or search_right):
#                     if s >= 0 and f_map_c[s2[s]] > 0:
#                         f_map_c[s2[s]] -= 1
#                         s -= 1
#                     elif s >= 0 and f_map_c[s2[s]] <= 0:
#                         search_left = False
#                     elif e <= len_s2 and f_map_c[s2[e]] > 0:
#                         f_map_c[s2[e]] -= 1
#                         e += 1
#                     elif e <= len_s2 and f_map_c[s2[e]] <= 0:
#                         search_right = False

#                     if all(value == 0 for value in f_map_c.values()):
#                         return True

#         return False


'''
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
len_s2 = 8
idx = 3
s = 2
e = 5
f_map_c = {a: 0, b: 0}

make a frequency map of s1's chars

traverse s2 until we encounter a char that is in s1

  copy the frequency map

  s, e = cur_idx

  while s - e + 1 < len(s1):

    check the left char of s2 if it exists:

      if map[ch] > 0, decrement it, left -= 1

      else break
    
    check the right char of s2 if it exists

      if map[ch] > 0, decrement it, right += 1

      else break

    return true

return false


'''
