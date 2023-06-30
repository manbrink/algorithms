function generateParenthesis(n: number): string[] {
  let wellFormed: string[] = [];
  backtrack("", n, n);

  function backtrack(combo: string, leftCount: number, rightCount: number) {
    if (rightCount < leftCount) {
      return;
    }

    if (leftCount === 0 && rightCount === 0) {
      wellFormed.push(combo);
    }

    if (leftCount > 0) {
      backtrack(combo + "(", leftCount - 1, rightCount);
    }

    if (rightCount > 0) {
      backtrack(combo + ")", leftCount, rightCount - 1);
    }
  }

  return wellFormed;
}

/*

'well formed': if you pushed open parens into array and popped one each time you encountered a closing one.  
array would be empty at end.

n = 3 pairs means 6 total parens.

'all combos': backtracking / decision tree

combo must always start with open paren.

-

at each backtracking step, decision is to add open or closing paren:

  if you've ever added more right than left parens to current combo, it is not well formed.

  backtrack with current combo, left count, and right count.  decrement left or right based on what you 
  add to current combo.






*/
