function solve(year) {
  const isBissexto = (year % 400 === 0) || (year % 4 === 0 && !(year % 100 === 0));
  if (isBissexto) {
    return `12.09.${year}`;
  }
  return `13.09.${year}`;
}

console.log(solve(2600));

module.exports = {
  solve,
};
