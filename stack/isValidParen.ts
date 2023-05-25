function isValid(s: string): boolean {
  let stack = [];
  let arr = s.split("");
  let chMapOpen = new Map<string, string>([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let chMapClose = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (var ch of arr) {
    if (chMapOpen.has(ch)) {
      stack.push(ch);
    } else if (chMapClose.has(ch)) {
      let topEl = stack.pop();
      if (!(topEl === chMapClose.get(ch))) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

// push each left side paren onto the stack.  when a closing variant is encountered,
// if the top of the stack matches - continue.  else return false.  return true

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// s = "["
// Output: false
