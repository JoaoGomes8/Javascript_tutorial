/*
Set é um outro tipo de coleção.
Tem semelhantes com o Map.
É especial pq não tem chave, apenas valores, e cada valor só pode existir uma vez.
*/

console.clear();

let valores = new Set();
valores.add('joao');
valores.add('ana');
valores.add('carlos');
console.table(valores);

/*
Contém os mesmos métodos e propriedades do Map.
*/

valores.delete('ana');
console.table(valores);

if(valores.has('carlos')){
    console.log('Carlos existe');
} else {
    console.log('Carlos não existe');
}

console.log(valores.size);

valores.clear();
console.table(valores);

console.log('-'.repeat(50));

/*
A principal caracteristica desta coleção é que, se tentar adicionar
um valor que já existe, ele não vai ser adicionado
*/

valores.add('joao');
valores.add('ana');
valores.add('carlos');
valores.add('ana');

console.table(valores);