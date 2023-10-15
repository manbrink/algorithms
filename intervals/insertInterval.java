import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        int i = 0;
        int n = intervals.length;

        // Add all intervals before the newInterval that don't overlap with it
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i]);
            i++;
        }

        // Merge overlapping intervals (i starts at index after last non-overlapping interval)
        while (i < n && intervals[i][0] <= newInterval[1]) { // after executing first while loop, we can assume remaining intervals would have end idx after newInterval start
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        result.add(newInterval);

        // Add all intervals after the newInterval
        while (i < n) {
            result.add(intervals[i]);
            i++;
        }

        return result.toArray(new int[result.size()][]);
    }
}


/*

    given:

        - non-overlapping
        - sorted by start idx

    task:

        - insert given interval so given two properties maintained.  can merge intervals if necessary.

    ex:

        Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
        Output: [[1,5],[6,9]]

    -

    initialize arraylist for result set

    iterate the intervals:

        if currentEnd >= insertStart:

            merge newInterval with currentInterval

            insert mergedInterval in result
 */