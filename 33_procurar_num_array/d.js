// como efetuar uma pesquisa num array?

console.clear();

// os métodos anteriores funcionam na perfeição para arrays de valores
// Ese quisermos fazer pesquisa numa array de objetos?

const clientes = [
    {nome:'joao', idade: 47},
    {nome:'ana', idade: 25},
    {nome:'carlos', idade: 18},
    {nome:'franscisca', idade: 52},
    {nome:'marta', idade: 37},
    {nome:'antonio', idade: 32},
];

// neste caso podemos usar o método find
// funciona nos bastidores como um ciclo que procura a primeira ocorrência pretendida.
// se for encontrada, devolve o objeto
let cliente = clientes.find(cli => cli.nome == 'marta')
console.log(cliente);
