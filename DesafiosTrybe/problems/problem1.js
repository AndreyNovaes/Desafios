// Exemplo de entrada:
// a = [-2, -1, 0, 1, 2]
// k = 3
// Exemplos de saídas:
// "NÃO"
// Explicação
// Os valores -2 e -1 se referem a pessoas estudantes que chegaram 2 
// minutos e 1 minuto, respectivamente, antes do horário da aula. 
// O valor 0 se refere à uma pessoa que chegou exatamente no 
// horário da aula, portanto, nenhum dos 3 valores representam 
// pessoas que chegaram atrasadas. os valores 1 e 2 se referem 
// a pessoas estudantes que chegaram 1 minuto e 2 minutos depois do 
// horário da aula, assim, pessoas atrasadas.

// Como o valor limite espitulado foi 3 e só duas pessoas se atrasaram,
// o professor não passou dever de casa.

function solve(arrival_times, threshold) {
  const atrasados = [];
  arrival_times.filter((arrival) => {
    if (arrival > 0) {
      atrasados.push(arrival);
    }
  });
  if (atrasados.length >= threshold) {
    return 'SIM';
  }
  return 'NÃO';
}

module.exports = {
  solve,
};
