let nacionalidade = 'Portugal';

const cliente = {
    nome: 'joao',
    apelido: 'gomes',
    telefone: 912345678,
    "tipo cliente": "VIP",
    [nacionalidade]: 'pt'
};

console.log(cliente.Portugal);