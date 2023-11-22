import heapq


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        num_freq = {}

        for num in nums:
            num_freq[num] = num_freq.get(num, 0) + 1

        max_heap = []
        for num, freq in num_freq.items():
            heapq.heappush(max_heap, (-num, freq))

        k_copy = k
        while k_copy > 0:
            largest = heapq.heappop(max_heap)
            largest_freq = largest[1]

            while largest_freq > 0:
                largest_freq -= 1
                k_copy -= 1

                if k_copy <= 0:
                    return -largest[0]


'''
  return the kth largest num in nums.  there may be duplicates. i.e. [4,5,5,6], k = 3.  ans = 5.

  1. make frequency dict

  2. add each (num, count) tuple to min heap (use negative of num to convert to max heap).

  3. while k_copy > 0, pop the root of max heap.  while its count is > 0, decrement its frequency count and 
  decrement k_copy.  if k_copy is 0, return this num.
'''
