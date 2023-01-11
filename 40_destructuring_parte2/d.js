// também é possível definir valores padrão para propriedades inexistentes

console.clear();

let cliente = {
    nome: 'joao',
    apelido: 'gomes',
    idade: 48,
}

let {nome, apelido, idade, profissao = 'outra qualquer'} = cliente;

console.log(nome);
console.log(apelido);
console.log(idade);
console.log(profissao);

console.log('-'.repeat(50));

// ou ainda para na alteração da ordem das propriedades
let fornecedor = {
    marca: 'microsoft',
    produto: 'windows 11'
}

let {area = 'software', produto: software = 'WINDOWS', marca: empresa = 'Indefinido'} = fornecedor

console.log(area);
console.log(software);
console.log(empresa);


