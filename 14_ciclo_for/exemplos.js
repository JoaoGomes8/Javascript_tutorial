/*
for(let numero = 1; numero <= 10; numero++){
    console.log(numero);
}

let numero2 = 1;
for(; numero2 <= 10; numero2++){
    console.log(numero2);
}

let numero3 = 1;
for(; numero3 <= 10;){
    console.log(numero3++);
}

for(let numero4 = 4; numero4 <= 10; numero4++){
    if(numero4 == 5) continue;
    console.log(numero4);
}

for(let numero5 = 1; numero5 <= 10; numero5++){
    console.log(numero5);
    if(numero5 == 5) break;
}

for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <= 3; valor2++){
        console.log(valor1, "x", valor2, "=",  valor1*valor2)
    }
}
*/
ciclo:for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <= 3; valor2++){
        if(valor1 * valor2 == 6) break ciclo;
        console.log(valor1, "x", valor2, "=",  valor1*valor2)
    }
}
console.log('terminado');