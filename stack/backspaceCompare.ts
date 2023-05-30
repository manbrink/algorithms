function backspaceCompare(s: string, t: string): boolean {
  let stackOne = "";
  let stackTwo = "";

  for (const ch of s) {
    if (ch === "#") {
      stackOne = stackOne.slice(0, -1);
    } else {
      stackOne = stackOne + ch;
    }
  }

  for (const ch of t) {
    if (ch === "#") {
      stackTwo = stackTwo.slice(0, -1);
    } else {
      stackTwo = stackTwo + ch;
    }
  }

  return stackOne === stackTwo;
}
