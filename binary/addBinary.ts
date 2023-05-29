function addBinary(a: string, b: string): string {
  let result = "";
  let carry = 0;

  const max = Math.max(a.length, b.length);

  let i = 1;
  while (i <= max) {
    let temp = carry;
    let aBit = a[a.length - i];
    let bBit = b[b.length - i];

    if (aBit) {
      temp += parseInt(aBit);
    }
    if (bBit) {
      temp += parseInt(bBit);
    }

    carry = Math.floor(temp / 2);
    result = "" + (temp % 2) + result;
    i++;
  }

  if (carry > 0) {
    result = "" + carry + result;
  }

  return result;
}

/*

Given two binary strings a and b, return their sum as a binary string.

Input: a = "1010", b = "1011"
Output: "10101"

-

binary arithmetic (base 2):

  - 0 + 0 = 0
  - 1 + 0 = 1
  - 1 + 1 = 0, carry 1
  - (1 remainder) + 1 + 1 = 1, carry 1

*/
