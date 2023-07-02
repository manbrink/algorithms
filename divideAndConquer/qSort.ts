function qSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const sortedArray = nums.slice();
  quicksort(sortedArray, 0, sortedArray.length - 1);
  return sortedArray;

  function quicksort(arr: number[], low: number, high: number): void {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);

      quicksort(arr, low, pivotIndex - 1);
      quicksort(arr, pivotIndex + 1, high);
    }
  }

  // move all elements less than pivot to left side of array, all greater to right
  function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1; // i tracks the earliest element > pivot, which we swap with the next one we find that's lower

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    // we add 1 to i to perform the last swap, the swap of the pivot itself
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // put pivot in center of partitioned array.
    return i + 1;
  }
}
