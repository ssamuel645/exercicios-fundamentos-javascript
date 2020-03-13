function jurosSimples(C, i, t) {
  return C + (C * i * t);
}

function jurosCompostos(C, i, t) {
  return C * (1 + i) ** t;
}

console.log(jurosSimples(1000, 0.1, 3).toFixed(2));
console.log(jurosCompostos(1000, 0.1, 3).toFixed(2));
