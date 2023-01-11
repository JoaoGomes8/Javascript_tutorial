console.clear();

function dizer_ola() {
    console.log("Olá 1!");
}


let dizer_ola2 = function(){
    console.log("Olá 2!");
}


dizer_ola();
dizer_ola2();

let nova_funcao = dizer_ola2;

nova_funcao();

