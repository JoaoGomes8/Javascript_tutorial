// métodos para operar arrays

// o metodo slice (não é splice) também dá para operar em arrays
// neste caso, podemos usá-lo para criar novos arrays a partir de partes de um outro array

console.clear();

let nomes = ['joao', 'ana', 'carlos','antonio','joana','maria','francisco','marta'];

// para criar dois novos arrays, um até metade e outro da metade até ao fim
let nomes_1 = nomes.slice(0,nomes.length/2);
let nomes_2 = nomes.slice(-(nomes.length/2));

console.log(nomes_1);
console.log(nomes_2);
