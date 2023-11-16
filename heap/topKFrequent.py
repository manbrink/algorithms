import heapq


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_freq = {}

        for num in nums:
            num_freq[num] = num_freq.get(num, 0) + 1

        min_heap = []

        for key in num_freq.keys():
            heapq.heappush(min_heap, (key, num_freq.get(key)))

        top_k_freq = heapq.nlargest(k, min_heap, key=self.key)

        return list(map(lambda x: x[0], top_k_freq))

    def key(self, x):
        return x[1]


'''
  get frequencies of each element in a dict

  add each value/freq pair to min heap, with freq being the heap key


'''
