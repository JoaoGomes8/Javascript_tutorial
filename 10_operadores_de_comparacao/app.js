// Operadores de comparação

// IMPORTANTE: todas as comparações retornam um boleano

console.log(10>20) // false
console.log(20>=20) // true


// comparação de strings 
console.log("joao" == "joao") // true
console.log("joao" != "joao") // false
console.log("joao" == "paulo") // false

// compara em relação à ordem alfabética
console.log("joao" > "joao") // false
console.log("joao" >= "joao") // true
console.log("joao" > "ana") // true



/*
Strict equality
A verificação de igualdade de dois valores tem um problema:
Não diferencia o 0 do false
*/ 

0 == false; //true
"" == false; //true

// com o == os operandos são convertidos para números

// strict equality operator === não faz essa conversão
0 === false; //false
"" === false; //false

null == undefined //true
null === undefined //false

// noutras comparações (> < >= <=) null = 0 e undefined = NaN


