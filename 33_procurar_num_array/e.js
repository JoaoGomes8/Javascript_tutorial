// como efetuar uma pesquisa num array?

console.clear();

// também está disponivel o método findIndex que funciona como o find, mas retorna apenas o índice
// e não o objeto em concreto

const clientes = [
    {nome:'joao', idade: 47},
    {nome:'ana', idade: 25},
    {nome:'carlos', idade: 18},
    {nome:'franscisca', idade: 52},
    {nome:'marta', idade: 37},
    {nome:'antonio', idade: 32},
];

console.log(clientes.findIndex(cli => cli.idade == 52));
