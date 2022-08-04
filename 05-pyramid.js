/*

    *
   ***
  *****
 *******
*********

*/

let n = 20;
let star = "";

for (let r = 1; r <= n; r++) {
  for (let s = 1; s <= n - r; s++) {
    star += " ";
  }
  for (let c = 1; c <= 2 * r - 1; c++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
