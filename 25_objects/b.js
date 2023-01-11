// na comparação de objetos, eles só são iguais se forem o mesmo objeto
let obj1= {
    valor: 10
};

let obj2= {
    valor: 10
};

if(obj1 == obj2) {
    console.log('iguais');
} else {
    console.log('diferentes');
}

obj1 = obj2;

if(obj1 == obj2) {
    console.log('iguais');
} else {
    console.log('diferentes');
}
