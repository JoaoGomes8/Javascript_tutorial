// CICLO FOR    

// o ciclo  for é um dos icclos mais utilizados em programação

for(inicio; condição; step){
    ações
}



for(let numero = 1; numero <= 10; numero++){
    console.log(numero);
}


// podemos ainda escrever da seguinte forma
let numero2 = 1;
for(; numero2 <= 10; numero2++){
    console.log(numero2);
}


// ou ainda
let numero3 = 1;
for(; numero3 <= 10;){
    console.log(numero3++);
}



// intercalando no loop
for(let numero4 = 4; numero4 <= 10; numero4++){
    if(numero4 == 5) continue;
    console.log(numero4);
}



// saltando fora do loop
for(let numero5 = 1; numero5 <= 10; numero5++){
    if(numero4 == 5) break;
}



// loops aninhados
for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <= 3; valor2++){
        console.log(valor1, "x", valor2, "=",  valor1*valor2)
    }
}



// sair de um loop aninhado com labels, se não se utilizasse "break ciclo(label)" apenas sairia de 1 ciclo
ciclo:for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <= 3; valor2++){
        if(valor1 * valor2 == 6) break ciclo;
        console.log(valor1, "x", valor2, "=",  valor1*valor2)
    }
}
console.log('terminado');