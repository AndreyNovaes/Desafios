// Exemplo de entrada:
// ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Exemplos de saídas:
// 3
// Explicação
// É possível formar 3 pares distintos, dois pares de meias relacionadas à cor de número 10 e um par de meias relacionadas à cor de número 20. Todos os demais números do arrays não formam pares.

function solve(socks_array) {
  const map = new Map();
  for (let i = 0; i < socks_array.length; i += 1) {
    map.set(socks_array[i], (map.get(socks_array[i]) || 0) + 1);
  }
  let paresqtd = 0;
  map.forEach((value) => {
    paresqtd = paresqtd += Math.floor((value / 2));
  });
  return paresqtd;
}

module.exports = {
  solve,
};
