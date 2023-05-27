// Given n, calculate F(n).

function fib(n: number): number {
  let fibs = [0, 1];

  let i = 2;
  while (i < n) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);

    i++;
  }

  return fibs[n - 1];
}
