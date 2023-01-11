const cliente = {
    nome: 'joao',
    apelido: 'gomes',
    telefone: 912345678
};

console.clear();

if ("telefone" in cliente) {
    console.log(cliente.telefone);
} else {
    console.log("não existe tlf no cliente");
}

console.log("-------------------------------------");

for(key in cliente){
    console.log(key + ": " + cliente[key]);
}



