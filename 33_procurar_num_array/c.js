// como efetuar uma pesquisa num array?

console.clear();

let nomes = ['joao','ana','carlos','antonio','joana','maria','francisco','marta'];

// No caso método includes, vamos obter um booleano indicando se o valor existe ou não
// independentemente da quantidade de vezes ou do seu índice

let pesquisa = 'ana'
if(nomes.includes(pesquisa)){
    console.log(`${pesquisa} existe no array`);
} else {
    console.log(`${pesquisa} não existe no array`);
}
