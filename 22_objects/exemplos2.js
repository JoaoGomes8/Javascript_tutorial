// literal do objeto

let cliente = {
    nome: 'joao',
    apelido: 'gomes',
    telefone: 912345678,

    //---------------------------------------------------

    nome_completo: function(){
        return this.nome + " " + this.apelido;
    },

    //---------------------------------------------------

    alterar_nome: function (novo_nome) {
        this.nome = novo_nome;
    }
};

console.clear();
console.log(cliente.nome);
console.log(cliente.nome_completo());
cliente.alterar_nome("Pedro");
console.log(cliente.nome_completo());