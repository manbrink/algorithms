import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public int findMinArrowShots(int[][] points) {
        if (points.length == 0) {
            return 0;
        }

        Arrays.sort(points, Comparator.comparingInt(point -> point[1]));

        int numArrows = 1;
        int curEndIdx = points[0][1];

        for (int i = 1; i < points.length; i++) {
            int[] curI = points[i];

            if (curI[0] <= curEndIdx) {
                continue;
            } else {
                numArrows += 1;
                curEndIdx = curI[1];
            }
        }

        return numArrows;
    }
}


/*
    points are basically intervals.  an arrow shot within the interval (inclusive) bursts the balloon.

    an arrow shot at 'x' bursts all balloons in the y plane at x.  so, perhaps sort intervals?

    -

    'minimum num arrows needed to burst all balloons'.

    Input: points = [[10,16],[2,8],[1,6],[7,12]]
    Output: 2

    sorted:
    [[1,6],[2,8],[7,12],[10,16]]

    -

    find the x coords where the most intervals overlap.  for the first two we know they start to overlap at 2 and
    stop at 6 (the end of the shorter one).  therefore, we can keep looking for additional overlapping intervals up to
    number 6 - then we have to shoot an arrow.

    -

    sort the intervals by index 0, then index 1

    initialize vars for: numArrows = 0, currentEndIdx = end idx of first interval, overlapping = false

    iterate the intervals:

        compare curInterval and nextInterval:

            if they overlap and nextInterval starts <= currentEndIdx:

                overlapping = true

                continue

            else if they overlap and nextInterval starts > currentEndIdx:

                overlapping = true

                increment numArrows

                currentEndIdx = nextInterval ending index

           else:

                overlapping = false

                increment numArrows

                currentEndIdx = nextInterval ending index


     if overlapping = true:

        increment numArrows

    return numArrows


 */