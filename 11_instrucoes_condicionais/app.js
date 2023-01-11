// Instruções condicionais 

// IF statement e ? operator

// IF statement

/*
if(condicao){
    ...
}
*/

let valor_a = 10;
let valor_b = 20;

if(valor_a < valor_b){
    console.log("OK!!!!!!");
}

// apenas com 1 instrução
if(valor_a < valor_b) console.log("Apenas 1 instrução!");


// // ELSE
if(condicao){
    // código de condicao for verdadeira
}
else{
    // código de condicao for falsa
}


// // ELSE IF
if(condicao1){
    // código de condicao1 for verdadeira
}else if(condicao2){
    // código de condicao2 for verdadeira
}else if(condicao3){
    // código de condicao3 for verdadeira
}else{
    // código se todas as condições forem falsa
}


// CONDITIONAL OPERATOR
let nome = "joao";
let verificacao = nome == "joao" ? "sim está" : "não está";
console.log("O utilizador está autorizado? " + verificacao);