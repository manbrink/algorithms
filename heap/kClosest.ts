function kClosest(points: number[][], k: number): number[][] {
  let distances = new Map<number, number[][]>();

  for (let point of points) {
    const d = distance(point, [0, 0]);
    let dArr = distances.get(d);

    if (dArr) {
      dArr.push(point);
    } else {
      distances.set(d, [point]);
    }
  }

  const sortedDist = Array.from(distances.keys()).sort((a, b) => a - b);

  let result = [];
  let i = 0;
  while (i < k) {
    let newDists = distances.get(sortedDist[i]);
    result.push(...newDists);
    i += newDists!.length;
  }

  return result;

  function distance(pointOne: number[], pointTwo: number[]) {
    return Math.sqrt(
      (pointTwo[0] - pointOne[0]) ** 2 + (pointTwo[1] - pointOne[1]) ** 2
    );
  }
}

// ai generated:

// class Point {
//   constructor(public x: number, public y: number) {}

//   getDistance(): number {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   }
// }

// function kClosest(points: number[][], k: number): number[][] {
//   const pointsWithDistances: Point[] = points.map((p) => new Point(p[0], p[1]));

//   pointsWithDistances.sort(
//     (a: Point, b: Point) => a.getDistance() - b.getDistance()
//   );

//   return pointsWithDistances.slice(0, k).map((p) => [p.x, p.y]);
// }

/*

initial thoughts:

- keep a record of the k smallest points encountered: { [x, y]: distance }
- keep a record of the smallest and largest distances encountered so far: smallest = { [x, y]: dist }, largest = { [x, y]: dist }

- iterate through the points and calculate their euc. distance.
  - if smallest points list has length < k:
    - add the distance record

  - if current distance < largest distance in smallest points:
    - add the new record, null the largest


*/
