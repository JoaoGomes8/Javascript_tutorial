// Ao longo desta playlist, já usámos var, let e const para definir variáveis, objetos, arrays, etc.
// Vamos finalmente ver quais são as diferenças (o escopo) entre o var e o let para finalizarmos esta playlist
// com a programação orientado a objetos (classes)

// VAR
/*
Podemos dizer que a utilização de VAR é uma coisa do passado.
Existem três formas de declarar variáveis: var, let e const.
Na sua essência mais básica, let e var são muitos semelhantes. Usar uma ou outra pode não ser diferente.
Internamente, no entanto, var é bem diferente.
Aparece muito nos scripts antigos. Na programação moderna é praticamente inexistente.
Se encontrares antigos scripts e quiseres fazer versões renovadas, é importante perceber o var.

O var não tem escopo de bloco.
Exemplo:
*/

console.clear();

if(1 == 1){
    var nome1 = "joao";
}
console.log(nome1);

// se usarmos o let em vez do var, a variável só vai existir dentro do if
if(1 == 1){
    let nome2 = "ana";
}
console.log(nome2);