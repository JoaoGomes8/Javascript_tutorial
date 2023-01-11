// Arrow functions

/*
Existe uma forma + simples e curta ao nível da sintaxe para criar funções,
e que é geralmente + interessante do que function expresssions.

São funções designadas por Arrow Functions
*/

let funcao = (argumentos) => expressao;

// Esta assinatura cria uma função que aceita argumentos, depois avalia a expressão do lado direito e rretorna o resultado

let funcao2 = function(a,b,c){
    return a + b + c;
}

// Vejamos um exemplo concreto:

let adicao = (a,b,c) => a + b + c;

// é uma abreviação de:
let adicao2 = function(a,b){
    return a + b;
}

// para executar a função...
console.log(adicao(10,20,30))