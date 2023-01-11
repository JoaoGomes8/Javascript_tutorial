/*
Falámos de arrays nos vídeos anteriores.
Também já falamos sobre objetos.

Objetos permitem guardar coleções de dados baseados numa key (chave). A chave e os valores
são propriedades.

Nos arrays podemos guardar coleções ordenadas de dados.

Neste vídeo vamos ver um outro tipo de coleção: Map
O Map é uma coleção de itens de dados com chaves.
É um pouco como os objetos, mas com chaves de qualquer tipo.
*/

console.clear();
let valores = new Map();
valores.set('nome', 'joao');
valores.set('idade', 48);
valores.set(1, '11111');
valores.set(2, '22222');
valores.set(3, '33333');
console.table(valores);

console.log('-'.repeat(50));

/*
O método set permite adicionar uma chave e respetivo valor.
Se quisermos ir buscar um determinado valor, usamos o método get.
*/

console.log(valores.get(1));
console.log(valores.get('idade'));

console.log('-'.repeat(50));


// Se quisermos perguntar à coleção se tem uma determinada chave:

if(!valores.has('apelido')){
    console.log('Não tem o apelido');
} else {
    console.log('Tem o apelido');
}

console.log('-'.repeat(50));


// Se quisermos remover o elemento da coleção, usamos o método delete
valores.delete(2);
console.table(valores);

// Se quisermos limpar toda a coleção usamos o método clear
valores.clear();
console.log(valores);

// E se quisermos saber quantos elementos têm o map, usamos a propriedade size.
console.log(valores.size);
