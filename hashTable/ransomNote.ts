function canConstructLessSpace(ransomNote: string, magazine: string): boolean {
  let magazineMap = new Map();

  for (const ch of magazine) {
    if (magazineMap.has(ch)) {
      magazineMap.set(ch, magazineMap.get(ch) + 1);
    } else {
      magazineMap.set(ch, 1);
    }
  }

  for (const ch of ransomNote) {
    // 0 is falsy for typescript
    if (magazineMap.get(ch)) {
      magazineMap.set(ch, magazineMap.get(ch) - 1);
    } else {
      return false;
    }
  }

  return true;
}

function canConstruct(ransomNote: string, magazine: string): boolean {
  let ransomMap = new Map();
  let magazineMap = new Map();

  for (var ch of ransomNote) {
    if (ransomMap.has(ch)) {
      ransomMap.set(ch, ransomMap.get(ch) + 1);
    } else {
      ransomMap.set(ch, 1);
    }
  }

  for (var ch of magazine) {
    if (magazineMap.has(ch)) {
      magazineMap.set(ch, magazineMap.get(ch) + 1);
    } else {
      magazineMap.set(ch, 1);
    }
  }

  for (var key of ransomMap.keys()) {
    if (!magazineMap.get(key) || ransomMap.get(key) > magazineMap.get(key)) {
      return false;
    }
  }

  return true;
}

/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters 
from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Input: ransomNote = "a", magazine = "b"
Output: false

Input: ransomNote = "aa", magazine = "ab"
Output: false

---

analysis:

  - analyze the frequency of characters in ransomNote and manazine.

implementation:

  - iterate both strings and store char frequencies in hash table.
  - iterate keys of ransomNote, if !magMap[key] || ransomMap[key] > magMap[key]

insights:

  - can save space and avoid using a second hash table by decrementing the frequency values of the magazine hash table

*/
