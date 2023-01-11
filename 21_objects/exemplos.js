// construtor do objeto
function pessoa(nm, ap, tlf) {
    this.nome = nm;
    this.apelido = ap;
    this.telefone = tlf;

    this.nome_completo = function(){
        return this.nome + " " + this.apelido;
    }

    this.alterar_nome = function(novo_nome) {
        this.nome = novo_nome
    }
}

let cliente = new pessoa('joao', 'gomes', 912345678);

console.log(cliente.nome);
console.log(cliente.nome_completo());
cliente.alterar_nome("Pedro");
console.log(cliente.nome_completo());