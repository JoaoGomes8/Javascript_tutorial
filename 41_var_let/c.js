// se o var for usado dentro de uma função, apenas é global nessa função

console.clear();

function somar(a,b) {
    var resultado = a+b;
    console.log(resultado);
}

somar(10,20);
console.log(resultado);