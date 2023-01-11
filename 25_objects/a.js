console.clear();
// copiar objetos

// Ao contrário dos tipos primitivos (string, number, bool, etc.) os objetos são copiados por referência.

// exemplo com primitivvas - variáveis são copiadas por valor
let nome1 = "joao";
let nome2 = nome1;

console.log(nome1);
console.log(nome2);
nome2 = "ana";
console.log(nome1);
console.log(nome2);

console.log("---------------------------------------");

// exemplo com objetos

const cliente1 = {
    nome: "joao"
};

const cliente2 = cliente1; // objetos são copiados por referência

console.log(cliente1.nome);
console.log(cliente2.nome);

cliente2.nome = "ana"; //aqui vai mudar os 2 clientes

console.log(cliente1.nome);
console.log(cliente2.nome);

