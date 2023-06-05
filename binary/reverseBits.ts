const reverseBits = (n) =>
  Number.parseInt(
    n.toString(2).padStart(32, "0").split("").reverse().join(""),
    2
  );
