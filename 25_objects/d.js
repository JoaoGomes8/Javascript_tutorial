console.clear();
// método 2 - Object.assign

let usuario1 = {
    nome: "marcelo"
};

let usuario2= {};

Object.assign(usuario2, usuario1);
console.log(usuario1.nome);
console.log(usuario2.nome);

usuario2.nome = "ricardo";
console.log("|");

console.log(usuario1.nome);
console.log(usuario2.nome);
