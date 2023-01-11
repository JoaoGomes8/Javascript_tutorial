const cliente = {
    nome: 'joao',
    apelido: 'gomes',
    telefone: 912345678,
    "tipo cliente": "VIP"
};

console.clear();
console.log(cliente.nome);
console.log(cliente['nome']);

console.log("-------------------------------------");

console.log(cliente.telefone);
delete cliente.telefone;
console.log(cliente.telefone);

console.log("-------------------------------------");

console.log(cliente["tipo cliente"]);

console.log("-------------------------------------");



