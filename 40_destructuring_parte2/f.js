// podemos ainda usar o rest (...) na desestruturação de objetos

console.clear();

let empresa = {
    nome: 'microsoft',
    area:'software',
    produtos:[
        'windows11',
        'office 365',
        'azure',
        'minecraft'
    ]
}

let {nome, ...outras_propriedades} = empresa;

console.log(nome);
console.log(outras_propriedades);

// existem ainda mais alguns detalhes mais cmoplexos da desestruturação,
// mas os exemplos aqui apresentados são os mais comuns.

