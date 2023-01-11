// os métodos keys, values e entries também estão disponíveis no Set

console.clear();

let nomes = new Set(['joao','ana','carlos']);

// keys
for (let chave of nomes.keys()) {
    console.log(chave);
}

console.log('-'.repeat(50));

// values
for (let valor of nomes.values()) {
    console.log(valor);
}

// entries
for (let entrada of nomes.entries()) {
    console.log(entrada);
}