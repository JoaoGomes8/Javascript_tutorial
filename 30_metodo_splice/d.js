// mais métodos para operar arrays
console.clear();

let nomes = ['joao', 'ana', 'carlos', 'antonio'];

console.log(nomes);

// os elementos eliminados são devolvidos pelo splice em forma de um novo array
// então...

let nomes_removidos = nomes.splice(2);
console.log(nomes);
console.log(nomes_removidos);