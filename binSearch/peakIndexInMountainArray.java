public class Solution {
    public static int peakIndexInMountainArray(int[] arr) {
        if (arr.length == 0 || arr[0] > arr[1]) {
            return 0;
        }

        if (arr[arr.length - 1] > arr[arr.length - 2]) {
            return arr.length - 1;
        }

        int start = 0;
        int end = arr.length - 1;

        while (start < end) {
            int midIdx = (start + end) / 2;

            if (arr[midIdx] > arr[midIdx + 1]) {
                end = midIdx;
            } else {
                start = midIdx + 1;
            }
        }

        // Return the start or end index depending on the situation
        return start;
    }
}



/*
   return the index where all elements to the left are less and all to right are less.

   constraint: O(log(n)) time

   -

   if it is guaranteed to be a mountain array, and everything to left is smaller and everything to right is smaller,
   are we just searching for idx of largest element?

   -

   bin search, except the whole array isn't actually sorted..

   split at mid and try to go up the mountain:

    if left el is >, go left

    if right el is >, go right

    else return current idx (we are at top)


 */