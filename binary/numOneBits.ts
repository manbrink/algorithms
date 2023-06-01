function hammingWeight(n: number): number {
  let weight = 0;

  while (n > 0) {
    let w = n % 2;

    if (w === 1) {
      weight += 1;
    }

    n = Math.floor(n / 2);
  }

  return weight;
}
