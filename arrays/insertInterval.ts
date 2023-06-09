function insert(intervals: number[][], newInterval: number[]): number[][] {
  // O(n), O(1)
  // Iterate over all intervals and try to expand our newInterval
  intervals.forEach(([x, y]: number[]) => {
    // expand bottom
    if (x <= newInterval[0] && y >= newInterval[0]) {
      newInterval[0] = x;
    }
    // expand top
    if (x <= newInterval[1] && y >= newInterval[1]) {
      newInterval[1] = y;
    }
  });

  // Time: O(n), Space: O(n)
  const left: number[][] = [];
  const right: number[][] = [];

  while (intervals.length > 0) {
    const interval: number[] = intervals.shift();

    if (interval[0] > newInterval[1]) {
      right.push(interval);
    } else if (interval[1] < newInterval[0]) {
      left.push(interval);
    }
  }

  return [...left, newInterval, ...right];
}

/*

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


*/
