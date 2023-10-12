import java.util.Arrays;
import java.util.Comparator;

// greedy: choose locally optimal solutions at each step in hope of finding global optimum

class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length < 2) {
            return 0;
        }

        Arrays.sort(intervals, Comparator.comparingInt((int[] interval) -> interval[0])
                .thenComparingInt(interval -> interval[1]));

        int numDeletions = 0;
        int endIdx = intervals[0][1];

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < endIdx) {
                numDeletions += 1;
                endIdx = Math.min(intervals[i][1], endIdx); // keep the smaller ending idx, effectively deleting the interval that stretches further and has more chance of overlap
            } else {
                endIdx = intervals[i][1];
            }
        }

        return numDeletions;
    }
}


// [[1,100],[11,22],[1,11],[2,12]]
// [[1,100],[1,11],[2,12],[11,22]]

// [[1,11],[1,100],[2,12],[11,22]] also sort by endIdx

// should delete [1,100], [2, 12]  not  [1,11],[2,12],[11,22]

/* 

how to determine if two intervals overlap

[a, b] & [c, d]

intervalOne starts before intervalTwo ends and intervalOne ends after intervalTwo starts

(a < d && b > c)

-

there is an aspect of combinations here since we can remove different sets of intervals to make the remaining 
set non-overlaping.

we want the set with the fewest removals, but how to get this without generating all possible combinations?

combinations ~ backtracking ?

-

1. sort the intervals (merge sort)

2. set up

  set result var for number of deletions

  set current end value = end value of first interval

3. iterate the intervals

  if start value of second < end value of first:

    increment num deletions

  else:

    update current end value to end value of current interval

4. return deletion count result

*/ 