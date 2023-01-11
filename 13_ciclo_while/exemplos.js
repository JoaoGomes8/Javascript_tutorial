let numero = 1;
while(numero <= 3){
    
    console.log(numero);
    numero++;
}

console.log("--------------------------");

let numero2 = 3;
while (numero2 >= 1) {
    console.log(numero2);
    numero2--;
}

console.log("--------------------------");

let numero3 = 1;
while(numero3 <= 3) console.log(numero3++);

console.log("--------------------------");

let numero4 = 1;
do{
    console.log(numero4);
    numero4++;
}while(numero4 <= 3)

console.log("--------------------------");

let numero5= 1;
do{
    console.log(numero5);
    numero5++;
    if(numero5 > 6) break;
} while(numero5 <= 10);