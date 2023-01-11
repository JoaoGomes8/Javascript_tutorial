// métodos para operar arrays

// o metodo slice (não é splice) também dá para operar em arrays
// neste caso, podemos usá-lo para criar novos arrays a partir de partes de um outro array

console.clear();

let nomes = ['joao', 'ana', 'carlos'];

// copiar um array tem o problema de poder ser uma cópia por referência.
// let novos_nomes = nomes;
// novos_nomes[1] = "carlos";
// console.log(nomes);
// console.log(novos_nomes);

// podemos usar o slice em qualquer argumento para fazer uma cópia para um novo array
let novos_nomes = nomes.slice();
novos_nomes[1] = "carlos";
console.log(nomes);
console.log(novos_nomes);
