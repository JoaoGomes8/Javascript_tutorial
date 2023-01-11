// vamos olhar um método muito usado nos arrays. O método map.
console.clear();

let nomes = ['joao','ana','carlos','antonio','joana','maria','francisco','marta'];

// pretendemos ter um novo array com o nº de caracteres de todos os elementos da coleção de nomes

let tamanhos = nomes.map(nome => nome.length);
console.table(tamanhos);
