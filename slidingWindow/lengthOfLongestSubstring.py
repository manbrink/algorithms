class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        s_win = 0
        e_win = 0
        max_len = 0
        win_ch_freq = {}

        while e_win < len(s):
            if win_ch_freq.get(s[e_win], 0) == 0:
                win_ch_freq[s[e_win]] = 1
                e_win += 1
                max_len = max(max_len, e_win - s_win)
            else:
                win_ch_freq[s[s_win]] -= 1
                s_win += 1

        return max_len


# class Solution:
#     def lengthOfLongestSubstring(self, s: str) -> int:
#         s_win = 0
#         e_win = 0
#         max_len = 0
#         win_ch_freq = {}

#         for ch in s:
#             while win_ch_freq.get(ch, 0) > 0:
#                 win_ch_freq[s[s_win]] = win_ch_freq.get(
#                     s[s_win], 0) - 1  # decrement ch freq for win start
#                 s_win += 1

#             win_ch_freq[ch] = win_ch_freq.get(ch, 0) + 1

#             if e_win - s_win >= max_len:
#                 max_len = e_win - s_win

#             e_win += 1

#         return max(max_len, e_win - s_win)


'''
    
Input: s = "abcabcbb"
Output: 3
s_win = 5
e_win = 7
max_len = 3
w_ch_freq = {a: 0, b: 1, c: 1}

-

current substr = ""
start window = 0
end window = 0
maxLen = 0
window ch frequencies = {}

iterate the string:
    get the current char

    while the window ch frequencies for this ch > 0:
        decrement ch frequencies for window start
        move up window start
    
    add current ch to frequencies 
    increment end window

    if e - s + 1 > maxLen:
        maxLen = e - s + 1

return max(maxLen, e - s + 1)

'''
