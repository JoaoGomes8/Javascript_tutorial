// como fazer uma iteração num array?
console.clear();

let nomes = ['joao','ana','carlos','antonio','joana','maria','francisco','marta'];

// dentro do ciclo, a função pode ainda guardar alguns valores adicionais
nomes.forEach(function(e, index) {
    console.log(`O índice é ${index} e o valor é ${e}`);
})