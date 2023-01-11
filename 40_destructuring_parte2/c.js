// também podemos alterar o nome das variáveis de saída definindo um alias na desestruturação

console.clear();

let cliente = {
    nome: 'joao',
    email: 'joao@gmail.com',
    telefone: '987652352'
}

let {nome: nome_completo, email: endereco_de_email, telefone: celular} = cliente;

/*
nome -> nome_completo
email -> endereco_de_email
telefone -> celular
*/

console.log(nome_completo);
console.log(endereco_de_email);
console.log(celular);

console.log('-'.repeat(50));

// esta regra também vale para alteração da ordem das variáveis
let fornecedor = {
    nome_da_marca: 'microsoft',
    produto: 'windows 11',
    categoria: 'Sistema operacional'
}

let {categoria: area, produto: software, nome_da_marca: marca} = fornecedor;
console.log(area);
console.log(software);
console.log(marca);
