- Wikipedia: Backtracking is a general algorithm for finding all (or some) solutions to some computational problems (notably Constraint satisfaction problems or CSPs), which incrementally builds candidates to the solution and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot lead to a valid solution.

- usually performed with a decision tree, which means making recursive call for each branch usually with a for loop.

- if question includes condition to only return unique solutions, Map can be avoided by using precise iteration that doesn't create
  duplicate solutions in the first place - like incrementing an index with each recursive call.
