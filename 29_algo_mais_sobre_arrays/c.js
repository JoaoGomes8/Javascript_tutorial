// existe uma outra forma de iteração nos arrays
let nomes = ['joao', 'ana', 'carlos'];

for(let nome of nomes){
    console.log(nome);
}

// ou (não aconselhável por razões técnicas)

for(let key in nomes){
    console.log(nomes[key]);
}