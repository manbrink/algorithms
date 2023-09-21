class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        min = matrix[0][0]
        max = matrix[len(matrix) - 1][len(matrix) - 1]
        kth_value = 0

        while (min <= max):
            midVal = min + (max - min) // 2

            count = self.count_less_than_or_equal(matrix, midVal)

            if count >= k:
                kth_value = midVal
                max = midVal - 1  # can we reduce our max value and still have at least k values?
            else:
                min = midVal + 1

        return kth_value

    def count_less_than_or_equal(self, matrix, midVal):
        row = len(matrix) - 1
        col = 0
        count = 0

        while row >= 0 and col < len(matrix):
            curVal = matrix[row][col]

            if curVal <= midVal:
                count += row + 1  # add count of all nums in this col including curVal
                col += 1
            else:
                row -= 1

        return count

# approach

# binary search for the kth smallest element's VALUE.  we can find that initial value by taking min + (max - min) / 2.

# for each iteration of binsearch, check how many elements less than or equal to current midval using a second method.

   # if we have at least k elements <= current midval - this is our current candidate answe.

# count num less than or equal to method. params: graph and current midval.  we use the properties of the graph (rows and columns sorted ascending) to calculate this
# number in a loop.  start at bottom left of graph.  if current num <= current midval, add number of elements in this columns up to
# and including current val - then increment our column.
# else if current num > current midval, decrement row (since all elements in current row after current element will be larger and can
# be discounted.)


# cold read reasoning

# Input:

# matrix = [
#     [1,  5,  9],
#     [10, 11, 13],
#     [12, 13, 15]
#     ],

# k = 8

# num = 13 (second one)

# -

# hint: 'sorted matrix' so binary search somehow.  but how do you binary search a 2d array?  start in middle and take slices?

# rows = 3, cols = 3 ... so 9 elements and we want 8th smallest.  index 0-3 in top half, index 5-8 in bottom half.
# split once, we have indices [5,6,7,8].
# split twice, [7, 8]
# split #3, [7]

# mid = 1,1

# must do better than O(n^2), so can we use the fact that the rows and columns are sorted
# to search in a way that ends up being in order?  can we construct the sorted array then just index into it for result?
