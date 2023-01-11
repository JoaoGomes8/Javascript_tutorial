class Pessoa{
    // propriedades | fields | campos
    nome
    apelido
    idade

    //  método
    apresentar(){
        // return 'Olá, o meu nome é ... e a minha idade é ...';
        return `Olá, o meu nome é ${this.nome} ${this.apelido} e a minha idade é ${this.idade} anos`;
    }
}

let eu = new Pessoa();
let tu = new Pessoa();
eu.nome = "joao";
eu.apelido = "gomes";
eu.idade = 21;

tu.nome = "ana";
tu.apelido = "silva";
tu.idade = 99;

console.table(eu);
console.table(tu);


console.table(eu.apresentar());
console.table(tu.apresentar());

