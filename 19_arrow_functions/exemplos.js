console.clear();

let adicao = (a,b) => a + b;
console.log(adicao(10,20))



// let aviso = () => "Esta mensagem é um aviso";
// console.log(aviso());




let alerta = (nome) => `Último alerta para ${nome}`;
console.log(alerta("joao"));




let saudar = (nome) => {
    let saudacao = "Bom dia";
    return `${saudacao}, ${nome}.`;
}

console.log(saudar("joao"));