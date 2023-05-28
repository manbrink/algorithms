/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 0;
    let end = n;
    let firstBadVersion = null;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (isBadVersion(mid)) {
        firstBadVersion = mid;
        end = mid - 1; // disregard later bad versions
      } else {
        start = mid + 1; // since all versions after a bad one are bad, we can disregard all previous versions if this one was good
      }
    }

    return firstBadVersion;
  };
};

/*

insights:

- no recursion needed, can just use while loop.
- since we know the search space is a sequence of numbers increasing by 1, we don't need to store them for checking. (mid index itself
  is the value we check).

*/
