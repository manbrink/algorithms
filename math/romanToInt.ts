function romanToInt(s: string): number {
  const rMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  let i = 0;
  while (i < s.length) {
    const char = s[i];

    if (["M", "D", "L", "V"].includes(char)) {
      result += rMap[char];
      i += 1;
    } else if (char === "I") {
      if (s[i + 1] === "V") {
        result += 4;
        i += 2;
      } else if (s[i + 1] === "X") {
        result += 9;
        i += 2;
      } else {
        i += 1;
        result += rMap[char];
      }
    } else if (char === "X") {
      if (s[i + 1] === "L") {
        result += 40;
        i += 2;
      } else if (s[i + 1] === "C") {
        result += 90;
        i += 2;
      } else {
        i += 1;
        result += rMap[char];
      }
    } else if (char === "C") {
      if (s[i + 1] === "D") {
        result += 400;
        i += 2;
      } else if (s[i + 1] === "M") {
        result += 900;
        i += 2;
      } else {
        i += 1;
        result += rMap[char];
      }
    }
  }

  return result;
}
