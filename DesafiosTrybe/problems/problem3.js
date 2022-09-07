// Exemplo de entrada:
// year = 2016
// Exemplos de saídas:
// 12.09.2016
// Explicação
// 2016 é divisível por 4, portanto, é um ano bissexto. Sendo assim,
// o 256º dia desse ano será 12 de setembro de 2016.

function solve(year) {
  const isBissexto = (year % 400 === 0) || (year % 4 === 0 && !(year % 100 === 0));
  if (isBissexto) {
    return `12.09.${year}`;
  }
  return `13.09.${year}`;
}

module.exports = {
  solve,
};
