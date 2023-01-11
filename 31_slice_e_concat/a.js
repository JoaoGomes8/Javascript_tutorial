// métodos para operar arrays

// o metodo slice (não é splice) também dá para operar em arrays
// neste caso, podemos usá-lo para criar novos arrays a partir de partes de um outro array

console.clear();

let nomes = ['joao', 'ana', 'carlos','antonio'];

// cria um novo array a partir do inicial entre o índice 1 (inclusive) e o 3 (exclusive)
let nomes_extraidos = nomes.slice(1,3);

console.log(nomes);
console.log(nomes_extraidos);