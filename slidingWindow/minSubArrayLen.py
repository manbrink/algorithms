class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        s = 0
        e = 0
        min_len = float('inf')
        sub_sum = 0

        # build the subarr until our e idx is at end of nums (right boundary of any subarray)
        while e < len(nums):
            sub_sum += nums[e]
            e += 1

            # while we have a subsum >= target, remove starting elements until we find the smallest possible sub arr with sum = target
            while sub_sum >= target:
                min_len = min(min_len, e - s)
                sub_sum -= nums[s]
                s += 1

        return min_len if min_len != float('inf') else 0


'''
s = 5
e = 6
min_len = 2
sub_sum = 3

sliding window approach:

s = 0
e = 1
min_length = 0

while s <= len(arr) - 1 or e <= len(arr) - 1:
 
  if sum of subarray between s and e < target and e < len(arr) - 1:

    e += 1

  else if sum of subarray between s and e > target

    s += 1

  else if sum of subarray between s and e == target

    min_length = len(subarray)

    e += 1

return min_length

'''
