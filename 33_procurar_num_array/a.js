// como efetuar uma pesquisa num array?

// vamos ver alguns métodos para pesquisar a existência ou não de determinado valor num array

console.clear();

let nomes = ['joao','ana','maria','carlos','antonio','joana','maria','francisco','marta'];

// vamos olhar para 3 métodos: indexOf, lastIndexOf e includes

// indexOf permite procurar o índice de um elemento a partir de uma posição.
// devolve o valor do índice ou -1 no caso de não encontrar o valor

// procurar em todo array o primeiro match
let posicao1 = nomes.indexOf('ana');
console.log(posicao1);

// procurar no novo array a partir do índice 4 até ao fim
let posicao2 = nomes.indexOf('maria',4);
console.log(posicao2);

// no caso de não existir o valor...
let posicao3 = nomes.indexOf('alberto');
console.log(posicao3);