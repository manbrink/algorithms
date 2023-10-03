import java.util.Comparator;
import java.util.ArrayList;

class Solution {
    public int[][] merge(int[][] intervals) {
        // Sort intervals based on the first idx
        Arrays.sort(intervals, Comparator.comparingInt(interval -> interval[0]));
        
        List<int[]> mergedIntervals = new ArrayList<>();
        
        int[] currentInterval = intervals[0];

        // [[1,3],[2,6],[8,10],[15,18]]
        
        for (int i = 1; i < intervals.length; i++) {
            if (currentInterval[1] >= intervals[i][0]) {
                // Merge intervals
                currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
            } else {
                // Add currentInterval to the result and update currentInterval
                mergedIntervals.add(currentInterval);
                currentInterval = intervals[i];
            }
        }
        
        // Add the last interval
        mergedIntervals.add(currentInterval);
        
        return mergedIntervals.toArray(new int[0][]);
    }
}


// class Solution {
//   public int[][] merge(int[][] intervals) {
//       if (intervals.length <= 1) {
//         return intervals;
//       }

//       ArrayList<int[][]> intervalsList = new ArrayList<int[][]>(intervals);

//       // Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//       // Output: [[1,6],[8,10],[15,18]] 

//       int i = 0;
//       while (i < intervalsList.size - 1) {
//         int[] iOne = intervalsList.get(i);
//         int[] iTwo = intervalsList.get(i + 1);

//         if (iOne[0] <= iTwo[1] && iTwo[0] <= iOne[1]) {
//           // create the merged interval
//           int[] mergedInterval = new int[2];
//           mergedInterval[0] = Math.min(iOne[0], iTwo[0]);
//           int larger = Math.max(iOne[1], iTwo[1]);
//           mergedInterval[1] = larger;

//           // replace the two intervals with the merged one
//           intervalsList.remove(i);
//           intervalsList.set(i, mergedInterval);
//         }

//         i += 1;
//       }

//       return intervalsList.toArray();
//   }
// }

/*
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]] 

if intervals.length <= 1:

  return intervals

while interval at i + 1 is not null: take interval at i and interval at i + 1.

  [1, 3]
  [2, 6]

  how to know if they overlap?  it means intervalTwo[0] <= intervalOne[1].

    more complicated if interval indices are not increasing.. implement simple solution first.

  how to merge? new interval = [smaller of the two, larger of the two]

    [1, 3], [2, 6] -> smaller = 1, larger = 6 -> [1, 6]

  push result into new array since no mention of doing this in place.

  replace the original two intervals with the new interval.

    [[1,6],[8,10],[15,18]]

  
 
 */