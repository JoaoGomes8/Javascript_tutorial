console.clear();
// como fazemos se quisermos de facto um objeto (fazer um clone do objeto)?
// métoodo 1
let user1 = {
    nome: "joao"
};

let user2 = {}
for(let key in user1){
    user2[key] = user1[key]
}

console.log(user1.nome);
console.log(user2.nome);

console.log("|");

user2.nome = "carlos"

console.log(user1.nome);
console.log(user2.nome);
    



