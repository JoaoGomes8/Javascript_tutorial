// como efetuar uma pesquisa num array?

console.clear();

// e se existir mais do que um resultado?
// o método find e findIndex apenas devolvem o primeiro match.
// Vamos utilizar o método filter

const clientes = [
    {nome:'joao', idade: 47},
    {nome:'ana', idade: 25},
    {nome:'carlos', idade: 18},
    {nome:'franscisca', idade: 52},
    {nome:'marta', idade: 37},
    {nome:'antonio', idade: 32},
];

console.log(clientes.filter(cli => cli.idade > 30));