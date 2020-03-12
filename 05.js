function floatToMoney(float) {
  return `R$${float.toFixed(2).toString().replace('.', ',')}`;
}

console.log(floatToMoney(0.30000000004));
