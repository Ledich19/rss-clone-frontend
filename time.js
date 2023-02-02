const number = 10;
let f1 = 0;
let f2 = 1;
for (let i = 0; i < number; i++) {
  console.log(f1);
  f2 = f1 + f2;
  f1 = f2 - f1;
}
