/*
Quando criamos um Map podemos passar um conjunto de chaves e valores no construtor do Map.
*/

console.clear();
let valores1 = new Map([
    ['nome','Joao'],
    ['idade',48],
    [1,'11111'],
    [2,'22222'],
    [3,'33333'],
]);
console.table(valores1);

console.log('-'.repeat(50));

// Se quisermos um objeto e quisermos passar para um Map, podemos fazer da seguinte forma:

let objeto = {
    nome: 'Joao',
    apelido: 'Ribeiro',
    idade: 48
};
let valores2 = new Map(Object.entries(objeto));
console.log(valores2.get('apelido'));

console.table(valores2);