function esCurioso(num){
    let sumaCubos = 0;
    let cont = num;
    let esCurioso = false;

    while(cont > 0){
        // Vamos dividiendo entre 10 para mostrar cada digito del numero
        let digito = cont %10;
        // Sumamos los digitos elevados al cubo
        sumaCubos += digito **3;
        // Eliminamos el digito una vez calculado
        cont = Math.floor(cont / 10);
    }

    // Si la suma es igual entonces es un numero curioso
    if(sumaCubos === num){
        esCurioso = true;
    }

    return esCurioso;
}

function mostrarCuriosos(){
    let curiosos = [];
    let num = 1;

    // Si en el bucle ve que el numero es curioso lo añade a la lista
    while (curiosos.length < 5){
        if(esCurioso(num)){
            curiosos.push(num);
        }
        num++;
    }
    alert("Los primeros 5 numeros curiosos son: "+curiosos);
}