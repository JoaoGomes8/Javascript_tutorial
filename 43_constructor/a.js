// construtor de uma classe
class Pessoa{
    /* Não é necessário identificar os campos(nome,idade) pq o construtor já o faz */

    // nome 
    // idade

    constructor(n, i){
        this.nome = n;
        this.idade = i;
    }

    apresentar(){
        return `Olá eu sou o ${this.nome} e tenho ${this.idade} anos.`;
    }
}

let eu = new Pessoa('joao',21);
eu.nome = "joaquim";
console.log(eu.apresentar());