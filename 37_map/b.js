// Existem 3 formas de fazer uma iteração no Map

console.clear();
let valores = new Map();
valores.set('nome','joao');
valores.set('idade',48);
valores.set(1, '11111');
valores.set(2, '22222');
valores.set(3, '33333');


// map.keys()
for(let key of valores.keys()){
    console.log(key);
}

console.log('-'.repeat(50));

// map.values
for(let valor of valores.values()){
    console.log(valor);
}

console.log('-'.repeat(50));

// map.entries()
for(let item of valores.entries()){
    console.log(item);
}

// existe ainda um outro método que não é exclusivo do Mat. O forEach
valores.forEach((valor, key) => {
    console.log(`A chave é: ${key} e o valor é: ${valor}`);
})