// os indices podem não ser sequenciais

let nomes = ['joao', 'ana', 'carlos'];
nomes[100] = 'joaquim';

console.log(nomes[50]);
console.log(nomes);

// importante
// push e pop são mais rápidos do que shift e unshift que vimos anteriormente.