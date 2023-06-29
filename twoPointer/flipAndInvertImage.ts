function flipAndInvertImage(image: number[][]): number[][] {
  for (let row of image) {
    reverseAndFlipRow(row);
  }

  function reverseAndFlipRow(nums: number[]) {
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
      let temp = nums[j];
      nums[j] = nums[i] ^ 1;
      nums[i] = temp ^ 1;

      i += 1;
      j -= 1;
    }

    // alternate
    // while (i <= j) {
    //   if (nums[i] === nums[j]) {
    //     nums[i] = nums[i] ^ 1;
    //     nums[j] = nums[j] ^ 1;
    //   }

    //   i += 1;
    //   j -= 1;
    // }
  }

  return image;
}

/*

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

-

[1, 1, 0] -> [0, 1, 1] -> [1, 0, 0]

- 

time complexity:

flip horizontal: to reverse array is O(matrix.length) * O(matrix row.length)

invert: O(n) to change each element

basically comes out to quadratic run time (not good)

-

can we do both operations at once?  how to do it with two pointers?

modified reverse method: also flip bits at start and end indices.  


*/
