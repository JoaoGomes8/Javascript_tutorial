// como efetuar uma pesquisa num array?

console.clear();

let nomes = ['joao','ana','carlos','antonio','joana','ana','maria','francisco','marta'];

// o método lastIndexOf funciona como IndexOf, mas do final para o ínicio
// neste caso o array tem 2 vezes o valor de 'ana'

console.log(nomes.indexOf('ana'));
console.log(nomes.lastIndexOf('ana'));
