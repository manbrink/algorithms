function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let token of tokens) {
    if (!isNaN(parseInt(token))) {
      stack.push(parseInt(token));
    } else {
      const numOne = stack.pop()!;
      const numTwo = stack.pop()!;

      let result: number;

      switch (token) {
        case "+":
          result = numTwo + numOne;
          break;
        case "-":
          result = numTwo - numOne;
          break;
        case "*":
          result = numTwo * numOne;
          break;
        case "/":
          const number = numTwo / numOne;

          if (number < 0) {
            stack.push(Math.ceil(number));
          } else {
            stack.push(Math.floor(number));
          }

          break;
        default:
          throw new Error(`Invalid token: ${token}`);
      }

      stack.push(result);
    }
  }

  return stack.pop()!;
}

// function evalRPN(tokens: string[]): number {
//   if (tokens.length === 1) {
//     return parseInt(tokens[0]);
//   }

//   const stack: number[] = [];
//   let result: number | null = null;

//   for (let token of tokens) {
//     if (!isNaN(parseInt(token))) {
//       stack.push(parseInt(token));
//     } else {
//       if (result === null) {
//         const numOne = stack.pop()!;
//         const numTwo = stack.pop()!;

//         if (token === "/") {
//           result = Math.floor(numTwo / numOne);
//         } else {
//           result = eval(`${numTwo} ${token} ${numOne}`);
//         }
//       } else {
//         const numOne = stack.pop()!;

//         if (token === "/") {
//           result = Math.floor(numOne / result);
//         } else {
//           result = eval(`${numOne} ${token} ${result}`);
//         }
//       }
//     }
//   }

//   return result!;
// }

/*

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

---

stack

result = null

for each token of tokens:

  if token is a number, push it onto the stack.

  if token is an operator:

    if result is null:

      pop two items off the stack.  result = second pop [operator] first pop

    if result is not null:

      operand = stack.pop()

      result = operand [operator] result

---

+

[10, 6, 9, 3]

(9 + 3)

-

*

[10, 6, -11]

((9 + 3) * -11)

-

/

[10, 6]

6 / (-11 * (9 + 3))

-

+

[10, 17]

17 + (6 / (-11 * (9 + 3)))

-

+

*/
