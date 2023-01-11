// Podemos usar desestruturação, por exemplo numa iteração

console.clear();

let cliente = {
    nome: 'Joao',
    apelido: 'Gomes',
    idade:48
}

for (let [key, value] of Object.entries(cliente)) {
    console.log(`${key}: ${value} `);
}

console.log('-'.repeat(50));

// Mas podemos fazer muito mais. Por exemplo, podemos trocar o valor de 2 variáveis entre si

let valor1 = 1000;
let valor2 = 5000;
[valor1, valor2] = [valor2, valor1];
console.log(valor1);
console.log(valor2);

console.log('-'.repeat(50));

// e podemos usar reticências para definir o termo 'resto' ou 'restante'.
// vejamos:

let[n1, n2] = ['joao','ana','carlos','antónio'];

// neste caso os valores 'carlos' e 'antónio' são ignorados.
// dizemos que o resto ou restante foi ignorado na desestruturação.
// então podemos fazer o seguinte:

let [nn1, nn2, ...nn] = ['joao','ana','carlos','antónio'];
console.log(nn1);
console.log(nn2);
console.log(nn);

console.log('-'.repeat(50));

// e podemos ainda definir valores padrão
let fornecedores = ['apple', 'asus','microsoft'];
let [fornecedor1, fornecedor2, fornecedor3 = 'Indefinido'] = fornecedores;
console.log(fornecedor1);
console.log(fornecedor2);
console.log(fornecedor3);
