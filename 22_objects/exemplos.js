// construtor do objeto, com arrow functions
function pessoa(nm, ap, tlf) {
    this.nome = nm;
    this.apelido = ap;
    this.telefone = tlf;

    this.nome_completo = () => {
        return this.nome + " " + this.apelido;
    }

    this.alterar_nome = (novo_nome) => {
        this.nome = novo_nome
    }
}

let cliente = new pessoa('joao', 'gomes', 912345678);
let cliente2 = new pessoa('maria', 'silva', 123456789);

console.clear();
console.log(cliente2.nome_completo());