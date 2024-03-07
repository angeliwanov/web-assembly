function hexToDecimal(hex) {
  hexString = hex.slice(2).split("");
  let decimal = 0;
  for (let i = 0; i < 3; i++) {
    let char = hexString.shift();
    switch (char) {
      case "A":
        char = 10;
        break;
      case "B":
        char = 11;
        break;
      case "C":
        char = 12;
        break;
      case "D":
        char = 13;
        break;
      case "E":
        char = 14;
        break;
      case "F":
        char = 15;
        break;
        defaul: char = Number(char);
        break;
    }
    decimal += 16 ** (2 - i) * char;
  }

  return decimal;
}

console.log(hexToDecimal("0x1A7"));

function hexToBinary(hex) {
  let decimal = hexToDecimal(hex);
  const binary = [];
  while (decimal) {
    binary.unshift(decimal % 2);
    decimal = parseInt(decimal / 2);
  }
  return binary.join("");
}

console.log(hexToBinary("0x1A7"));
