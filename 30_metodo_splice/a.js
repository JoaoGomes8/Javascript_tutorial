// mais métodos para operar arrays

/*
Já vimos vários métodos para trabalhar com arrays.
Vamos avançar mais um pouco.
existe um método designado por SLICE que é uma autêntica caixa de ferramentas para gerir um array
Vamos ver este método em várias ações
*/

let nomes = ['joao', 'ana', 'carlos', 'antonio'];

// como remover um elemento do array?
// Os arrays são objetos na sua essência, portanto podemos testar o delete

delete nomes[2];
console.log(nomes);

// como podemos ver, o elemento foi de facto removido, mas continua lá o seu espaço.
// se vir-mos o tamanho do array continua 4

console.log(nomes.length);

nomes.splice(2,1);
console.log(nomes);
console.log(nomes.length);