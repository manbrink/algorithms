function longestCommonPrefix(strs: string[]): string {
  let sorted = strs.sort();

  let output = "";
  let firstword = sorted[0];
  let lastword = sorted[sorted.length - 1];

  for (var i = 0; i < firstword.length; i++) {
    if (firstword[i] == lastword[i]) {
      output += firstword[i];
    } else {
      break;
    }
  }

  return output;
}
