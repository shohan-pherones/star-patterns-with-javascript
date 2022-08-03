let number = 5;
let star = "";

for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= number; j++) {
    if (i === 1 || i === number) {
      star += "*";
    } else {
      if (j === 1 || j === number) {
        star += "*";
      } else {
        star += " ";
      }
    }
  }
  star += "\n";
}

console.log(star);
