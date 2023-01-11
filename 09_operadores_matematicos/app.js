// operador unário, pq apenas tem um operando
let valor1 = 10;
valor1 = -valor1; // -10

// operador binário, pq  tem mais do que um operando
let valor2 = 10, valor3= 20;
let resultado = valor2 + valor3;



a + b // adição
a - b // subtração
a * b // multiplicação
a / b // divisão



/*
% - resto de uma divisão
7 / 2 = 3.5
7 % 2 = 1
*/



// ** - potenciação
10 ** 2 //100



// Concatenação de strings
let nome = "joao", apelido = "gomes";
let nome_completo = nome + " " + apelido; //joao gomes

"1" + 2     // 12
2 + "1"     // 21
"2" + 1 + 3 // 213
1 + 3 + "2" // 42



// Conversão numérica - utilização de operador unário
let x = 1;
+x; //1

let y = -10;
+y; //10



//Conversão de boleanos para números
+true  //1
+false //0



// Converter strings para números
let valor_a  = "10";
let valor_b  = "20";

+valor_a + +valor_b //30
// ou
Number(valor_a) + Number(valor_b) //30
