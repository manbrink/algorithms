import heapq


class Solution:
    def frequencySort(self, s: str) -> str:
        freq_dict = {}

        for ch in s:
            freq_dict[ch] = freq_dict.get(ch, 0) + 1

        min_heap = []
        for ch, freq in freq_dict.items():
            heapq.heappush(min_heap, (-freq, ch))

        sorted_tuples = []
        while min_heap:
            freq, ch = heapq.heappop(min_heap)
            sorted_tuples.extend([ch] * -freq)

        new_str = "".join(sorted_tuples)

        return new_str

# import heapq


# class Solution:
#     def frequencySort(self, s: str) -> str:
#         freq_dict = {}

#         for ch in s:
#             freq_dict[ch] = freq_dict.get(ch, 0) + 1

#         min_heap = []
#         for ch in s:
#             heapq.heappush(min_heap, (ch, freq_dict.get(ch)))

#         largest_tuples = heapq.nlargest(len(s), min_heap, key=self.key)
#         new_str = "".join(list(map(lambda t: t[0], largest_tuples)))

#         return new_str

#     def key(self, el):
#         return el[1]


'''
1. make frequency dict of chars in s

2. add tuples to a min heap: (char, frequency)

3. get each tuple from the min heap and append its char to front of new str

'''
