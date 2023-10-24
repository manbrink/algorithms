class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if len(nums) == 1 and nums[0] == target:
            return 0
        elif len(nums) == 1:
            return -1

        s = 0
        e = len(nums) - 1

        while s <= e:
            m = (s + e) // 2

            if nums[m] == target:
                return m
            elif nums[s] <= nums[m]:  # is left side sorted?
                if nums[s] <= target <= nums[m]:  # is target in left side?
                    e = m - 1
                else:
                    s = m + 1
            else:
                if nums[m] <= target <= nums[e]:  # is target in right side?
                    s = m + 1
                else:
                    e = m - 1

        return -1


'''
nums = [4,5,6,7,0,1,2]
target = 1
correct ans = 5

[7,1,2,3,4,5,6]
target = 1
correct ans = 1


---

key info

- sorted ascending
- distinct values
- has been rotated unknown number of times

return idx of target if in nums or -1, O(logn)

---

sorted + O(logn) suggests binsearch

---

there will never be anything bigger than current mid to left, but there may be
larger or smaller values to right depending on if it is rotated.

binsearch:

  if target == mid:
  
    return m
  
  else if target > mid:

    search right

  else if target < mid and target > end

    search left

  else if target < mid and target <= end

    search right

  return s

'''
