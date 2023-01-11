// e se tivermos um objeto mais complexo, mas apenas queremos retirar uma parte?

console.clear();

let empresa = {
    nome: 'microsoft',
    area: 'software',
    produtos: [
        'windows11',
        'office 365',
        'azure',
        'minecraft'
    ]
}

let {nome} = empresa;
let{produtos} = empresa;

console.log(nome);
console.log(produtos);