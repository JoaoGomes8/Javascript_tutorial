// também podemos desestruturar objetos, no entanto a sintaxe é ligeiramente diferente.

console.clear();

let cliente = {
    nome: 'joao',
    email: 'joao@gmail.com',
    telefone: '987652352'
}

let {nome, email, telefone} = cliente;

console.log(nome);
console.log(email);
console.log(telefone);