function isAnagram(s: string, t: string): boolean {
  let sMap = new Map<string, number>();
  let tMap = new Map<string, number>();

  if (s.length !== t.length) {
    return false;
  }

  for (var ch of s) {
    const count = sMap.get(ch);
    if (count) {
      sMap.set(ch, count + 1);
    } else {
      sMap.set(ch, 1);
    }
  }

  for (var ch of t) {
    const count = tMap.get(ch);
    if (count) {
      tMap.set(ch, count + 1);
    } else {
      tMap.set(ch, 1);
    }
  }

  for (var ch of s) {
    if (sMap.get(ch) !== tMap.get(ch)) {
      return false;
    }
  }

  return true;
}
