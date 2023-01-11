// alguns métodos e propriedades de strings
// os métodos retornam sempre um novo valor

let nome = "joão gomes";

// principal propriedade das strings: número de caracteres
console.log(`Número de caracteres da string: ${nome.length}`);

// métodos para colocar a string um uppercase
console.log(nome.toLocaleUpperCase());

// apresentar um caracter dentro da string numa determinada posição
// indices de base zero
console.log(nome.charAt(0));

// juntar strings: dois métodos
let string1 = "um ";
let string2 = "dois ";
let string3 = "três ";
let string_total = string1 + string2 + string3;
console.log(string_total);

let outra_string_total = string1.concat(string2, string3);
console.log(outra_string_total);

// verifica se uma contém outra
console.log(nome.includes('joão'));

// dividir uma string
let frase = "Esta frase tem várias palavras.";
console.log(frase.split(" "));
