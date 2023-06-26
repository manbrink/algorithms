function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (original.length !== m * n) {
    return [];
  }

  let result = [];

  while (original.length > 0) {
    let newRow = [];

    while (newRow.length < n) {
      newRow.push(original.shift());
    }

    result.push(newRow);
  }

  return result;
}

/*

if original.size > m * n

  return []

build each row, then push the row into the result.

  while original has items:

    push items into new row array until its size is n, then push it into result


*/
