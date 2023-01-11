/*
Duas das estruturas mais usadas no js são os arrays e os objetos.
A desestruturada (destructuring) é uma declaração especial da sintaxe que permite
transformar elementos de um array ou propriedade de um objeto em variáveis separadas
*/

console.clear();

// arrays

let nomes = ['joao','ana','carlos'];
let [nome1, nome2, nome3] = nomes;

console.log(nome1);
console.log(nome2);
console.log(nome3);

console.log('-'.repeat(50));

// e podemos usar a mesma sintaxe com métodos que retornam arrays.
// por exemplo, o método split de uma string.
let nome_completo = "João Gomes";
let nome_completo_array = nome_completo.split(' ');
let [nome,apelido] = nome_completo.split(' ');
console.log(nome_completo_array);
console.log(nome);
console.log(apelido);

// IMPORTANTE: Os valores do array e da string permanecem inalterados.
// Apenas são criadas novas variáveis