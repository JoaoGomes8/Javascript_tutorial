console.clear();

// função sem parametros
function apresentar_mensagem() {
    console.log("Olá mundo");
}

apresentar_mensagem();



// função com um parametro
function apresentar_mensagem2(texto) {
    console.log("A nova mensagem a apresentar é: ",texto);
}

apresentar_mensagem2("Nova versão do Olá mundo!");



// função com vários parametros
function adicionar_valores(a,b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

adicionar_valores(10,30);



// função com vários parametros que retorna um resultado
function adicionar_valores2(a,b) {
    return a + b;
}

let valor = adicionar_valores2(50,20);
console.log("A adição resultou em: " + valor)



// variáveis locais e externas
// uma variável declarada dentro de uma função, só existe dentro dessa função
function executar() {
    let nome = "joao";
    console.log(nome);
}

executar();
//console.log(nome); ----------ERRO-----------



// uma variável externa pode ser usada dentro e fora de uma função (e pode modificá-la)
let nome2 = "joao2";
function executar2() {
    console.log(nome2);
    nome2 = "paulo2"
}

executar2();
console.log(nome2);



// funções com parâmetros com valores padrão
function multiplicar(a,b = 2) {
    return a * b;
}

console.log(multiplicar(3));
console.log(multiplicar(3,5));



// parâmetros por padrão indefinidos
// undefined, || ou nullish
function apresentar_valor(valor) {
    // valor = valor || 1010;
    // valor ?? 5000;
    if(valor === undefined) valor = 100;
    console.log(valor);
}

apresentar_valor();