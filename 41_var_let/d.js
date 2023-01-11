// com o let, não podemos declarar a mesma variável mais do que uma vez.

console.clear();

// ERRO!
// let nome = "joao";
// let nome = "ana";

// já com o var...
var nome1 = "carlos";
var nome1 = "antonio";
console.log(nome1);

/*
Outra coisa estranha:

Podemos definir uma variável sem o termo let, const ou var e depois declarar var, mas não o let
*/

mensagem = "olá";
console.log(mensagem);

var mensagem;
// let mensagem; // ERRO

/*
Durante os próximos vídeos vamos rapidamente conhecer os príncipios básicos da 
criação de classes no Js. Algo que não existia nos primórdios do Js,
mas que convém percebermos como funciona, pq é um dos principais pilares de
qlq linguagem de programação moderna.
A playlist dos fundamentos do Js estará concluida para avançarmos rapidamente
para a exploração do Js em ambiente Web. 
*/