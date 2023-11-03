class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        max_length = 0
        max_repeat = 0  # max count of any ch in the current window
        freq = {}
        left = 0

        for right in range(len(s)):
            freq[s[right]] = freq.get(s[right], 0) + 1
            max_repeat = max(max_repeat, freq[s[right]])

            # can we perform at most k replacements to make all chars in window the same?
            # number of chars characters in the current window that need to be replaced in order to make all characters in the window the same
            if (right - left + 1 - max_repeat) > k:
                freq[s[left]] -= 1

                if freq[s[left]] == 0:
                    del freq[s[left]]
                left += 1

            max_length = max(max_length, right - left + 1)

        return max_length

# Input: s = "ABAB", k = 2
# Output: 4

# class Solution:
#     def characterReplacement(self, s: str, k: int) -> int:
#         if len(s) == 1:
#             return 1

#         longest_len = 0
#         s_w = 0
#         e_w = 1
#         reps_left = k

#         for ch in s[1:]:
#             if ch != s[s_w] and reps_left > 0:
#                 reps_left -= 1
#                 e_w += 1
#             elif ch == s[s_w]:
#                 e_w += 1
#             else:
#                 longest_len = max(longest_len, e_w - s_w + 1)
#                 s_w = e_w
#                 e_w = s_w + 1
#                 reps_left = k

#         return max(longest_len, e_w - s_w + 1)


'''
if length of s == 1, return 1

longest = 0
s = 0
e = 1
reps_left

iterate the ch's of str from idx 1:
  if ch != ch at start of window and we have replacements left:
    decrease replacements left
    increment e
  if ch == ch at start of window:
    increment e
  else:
    longest = max(longest, e - s + 1)
    s = s + 1
    e = s + 1
    reps_left = k

return max(longest, e - s + 1)

'''
