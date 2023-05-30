function containsDuplicate(nums: number[]): boolean {
  const sorted = nums.sort(); // O(nlogn)

  // O(n)
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1]) {
      return true;
    }
  }

  return false;
}
