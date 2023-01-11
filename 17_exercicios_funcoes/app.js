/*
Exercicio com funções

Criar variável numero1 e numero2
Podes atribuir os valores numericos que quiseres a cada variavel

Criar 4 funções para executar as operações matematicas mais conhecias:
adicao, subtracao, multiplicacao e divisao

apresentar na consola o resultado de cada uma das operações efetuadas com numero1 e numero2

*/
console.clear();

let numero1 = 10, numero2 = 20;

function adicionar(num1, num2){
    let res = num1 + num2;
    console.log(`${num1} + ${num2} = ${res}`);
}
function subtrair(num1, num2){
    let res = num1 - num2;
    console.log(`${num1} - ${num2} = ${res}`);
}
function multiplicar(num1, num2){
    let res = num1 * num2;
    console.log(`${num1} x ${num2} = ${res}`);
}
function dividir(num1, num2){
    return (`${num1} / ${num2} = ${num1 / num2}`);
}

adicionar(numero1,numero2);
subtrair(numero1,numero2);
multiplicar(numero1,numero2);
console.log(dividir(numero1,numero2));