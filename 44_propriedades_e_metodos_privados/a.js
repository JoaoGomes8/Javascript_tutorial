class Pessoa {
    //  # torna a propriedade privada

    #nome 
    

    constructor(n){
        this.#nome = n;
    }

    apresentar_nome(){
        return this.#nome;
    }

    setNome(nome){
        if(nome == 'joao'){
            this.#nome = 'joao gomes'.toUpperCase();
        } else {
            this.#nome = nome.toUpperCase();
        }
    }

    getNome(){
        return this.#nome;
    }

    //-------------------------------------------------- 

    #apresentar_interno(){
        console.log('Nome:' + this.#nome);
    }

    apresentar(){
        return this.#apresentar_interno();
    }
}

let eu = new Pessoa('ana',21);
// eu.setNome('joao');
// console.log(eu.getNome());

eu.apresentar();
