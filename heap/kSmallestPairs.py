import heapq
# from heap import MinHeap

# using built in heap:


class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        if not nums1 or not nums2:
            return []

        min_heap = []

        for i in range(min(k, len(nums1))):
            heapq.heappush(
                min_heap, (nums1[i] + nums2[0], nums1[i], nums2[0], 0))

        result = []

        while min_heap and len(result) < k:
            _, num1, num2, idx2 = heapq.heappop(min_heap)

            result.append([num1, num2])

            if idx2 + 1 < len(nums2):
                new_sum = num1 + nums2[idx2 + 1]

                heapq.heappush(
                    min_heap, (new_sum, num1, nums2[idx2 + 1], idx2 + 1))

        return result


# class Solution:
#     def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
#         heap_one = MinHeap()
#         heap_one.populate(nums1)

#         heap_two = MinHeap()
#         heap_two.populate(nums2)

#         result = []

#         num_one = heap_one.pop()
#         num_two = heap_two.pop()

#         result.append([num_one, num_two])

#         while len(result) < k and (num_one is not None or num_two is not None):
#             next_num_one = heap_one.pop()
#             next_num_two = heap_two.pop()

#             if next_num_one is not None and (num_one + next_num_two) < (num_two + next_num_one):
#                 result.append([num_one, next_num_two])
#                 num_two = next_num_two
#             else:
#                 result.append([next_num_one, num_two])
#                 num_one = next_num_one

#         return result


# Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
# Output: [[1,1],[1,1]]

# Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 3
# Output: [[1,1],[1,1],[1,2]]

# create minheaps for each array

# loop k times:
#   each iteration pop the smallest off the min heaps.  if they are a combination
#   that hasn't been used yet, add it.
#
#   otherwise, pop the next two smallest off, which will
#   give these combinations:

#   heap1 original, heap2 next smallest
#   heap2 original, heap1 next smallest

#   add combo with smaller sum
