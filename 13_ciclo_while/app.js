/* ciclos existem para repetirmos a execução de ações.
Por exemplo, se quisermos apresentar um conjunto de 10 operações baseadas no mesmo algoritmo,
não é necessário repetir 10 vezes o mesmo código
*/


// WHILE

while(condicao){
    //código a executar
}


let numero = 1;
while(numero <= 10){
    
    console.log(numero);
    numero++;
}



// inverter a apresentação
let numero2 = 10;
while (numero2 >= 1) {
    console.log(numero2);
    numero--;
}



// podemos usar sem chaves se tiver apenas uma ação
let numero3 = 1;
while(numero3 <= 3) console.log(numero3++);



// DO WHILE
let numero4 = 1;
do{
    console.log(numero4);
    numero4++;
}while(numero4 <= 3)



// quebrar o ciclo
let numero5= 1;
do{
    console.log(numero5);
    numero5++;
    if(numero5 > 6) break;
} while(numero5 <= 10);