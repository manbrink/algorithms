function rob(nums: number[]): number {
  let robOne = 0;
  let robTwo = 0;

  // [rob1, rob2, n, n+1, ...]
  for (var n of nums) {
    let temp = Math.max(n + robOne, robTwo);
    robOne = robTwo;
    robTwo = temp;
  }

  return robTwo;
}

// function rob(nums: number[]): number {
//   let max = 0;

//   backtrack(0, nums);
//   backtrack(0, nums.slice(1));

//   return max;

//   function backtrack(currentTotal: number, houses: number[]) {
//     if (houses.length === 0) {
//       return;
//     }

//     currentTotal += houses[0];

//     if (currentTotal > max) {
//       max = currentTotal;
//     }

//     let validHouses = houses.slice(2);

//     for (let i = 0; i < validHouses.length; i++) {
//       backtrack(currentTotal, validHouses.slice(i));
//     }
//   }
// };