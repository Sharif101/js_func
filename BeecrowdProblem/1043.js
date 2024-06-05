function result(A, B, C) {
  if (B + C > A && A + B > C && A + C > B) {
    let p = parseFloat(A + B + C);
    return `Perimetro = ${p.toFixed(1)}`;
  } else {
    let area = ((A + B) * C) / 2;
    return `Area = ${area.toFixed(1)}`;
  }
}
console.log(result(6.0, 4.0, 2.1));
