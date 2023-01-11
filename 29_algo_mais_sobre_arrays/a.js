// alguns aspetos adicionais sobre arrays

// os arrays são copiados por referência

let nomes = ['joao', 'ana', 'carlos'];
let outros_nomes = nomes; // cópia por referência

outros_nomes[1] = 'antonio';
console.log(outros_nomes, nomes);