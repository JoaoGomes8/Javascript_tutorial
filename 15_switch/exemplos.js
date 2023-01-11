let valor = 3;
switch(valor){
    case 1:
        console.log("Valor é igual a 1");
        break;
    case 2:
        console.log("Valor é igual a 2");
        break;
    case 3:
        console.log("Valor é igual a 3");
        break;

    default:
        console.log("Nada ...");
        break;
}

let valor2 = 2;
switch(valor2){
    case 1:
    case 2:
    case 3:
        console.log("Valor é igual ou inferior a 3");
        break;
    case 4:
        console.log("Valor é igual a 4");
        break;
    
    default:
        console.log("Valor é superior a 4");
        break;
}