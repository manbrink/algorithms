import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
      int firstLen = firstList.length;
      int secondLen = secondList.length;
      List<int[]> result = new ArrayList<>();

      if (firstLen == 0 || secondLen == 0) {
        return result.toArray(new int[0][]);
      }

      int i = 0;
      int j = 0;
      while (i < firstLen && j < secondLen) {
        int[] curFirst = firstList[i];
        int[] curSecond = secondList[j];

        if (overlap(curFirst, curSecond)) {
          int startVal = Math.max(curFirst[0], curSecond[0]);
          int endVal = Math.min(curFirst[1], curSecond[1]);
          int[] overlapInterval = {startVal, endVal};
          result.add(overlapInterval);
        }
        
        if (curFirst[1] < curSecond[1]) {
          i += 1;
        } else {
          j += 1;
        }
      }

      return result.toArray(new int[0][]);
    }

    private boolean overlap(int[] intervalOne, int[] intervalTwo) {
      // intervalOne starts before intervalTwo ends and ends after intervalTwo starts
      if (intervalOne[0] <= intervalTwo[1] && intervalTwo[0] <= intervalOne[1]) {
        return true;
      } else {
        return false;
      }
    }
}

/*
  need to iterate over both interval sets while either has intervals left.

  start with first of each.

  check if there's an overlap, and if so add it to the result set.

    how to calculate the overlap?

    [0, 2]
    [1, 5]

    overlap = [1, 2] = [greater of start values, lesser of end values] (tie just take either)

  the interval list with the interval with the smaller second value is incremented.

 */