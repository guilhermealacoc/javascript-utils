const precos = [
  "Credito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

/**
 * FILTER
 *
 * Nesse exemplo, o filter vai filtrar somente os dados de dinheiro.
 *
 * Quando retornar true, o filter vai adicionar o item no array.
 */

const precosFiltro = precos.filter((preco) => {
  return preco.includes("R$");
});
console.log(precosFiltro);

/**
 * MAP
 *
 * O map vai modificar o array original, aplicar nele uma tipagem ou alteracao, por exemplo.
 *
 */

const precosNumeros = precosFiltro.map((preco) => {
  return +preco.replace("R$", "");
});

console.log(precosNumeros);

/**
 * REDUCE
 *
 * Reduce nao vai retornar um array por padrao.
 *
 */

const total = precosNumeros.reduce((anterior, item) => {
  console.log(anterior, item);
  return anterior + item;
});
console.log(total);
