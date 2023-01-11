// reparem que a ordem das propriedades não importa.
// podemos alterar a ordem da desestruturação, mantendo o nome das variáveis
// igual ao nome das chaves das propriedades.

console.clear();

let cliente = {
    nome: 'joao',
    email: 'joao@gmail.com',
    telefone: '987652352'
}

let {email, telefone, nome} = cliente;

console.log(nome);
console.log(email);
console.log(telefone);