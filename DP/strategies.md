Recipe:

1. Define the subproblem

2. State the recursive relation

- Can sometimes have tabular solutions to store previous work (longestPalindrome)

- Think bottom-up when building the solution from subproblems.  you'll generally start with a 1d or 2d array
initialized to 0 or false.  Then, you'll set the base case value manually.

- there's usually a phase of adding the number of combinations / solutions from a sub problem, then a second step of adding new valid solutions. i.e. decode ways problem adding single digit, then double digit decodings.

