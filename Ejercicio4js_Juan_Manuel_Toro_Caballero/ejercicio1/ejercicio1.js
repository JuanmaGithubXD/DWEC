//Creamos un array con varias frases
const frasesFrikisInformatica = [
    "¡Es solo un bug, no un error fatal!",
    "No es un fallo, es una caracteristica no documentada",
    "El codigo perfecto no existe... hasta que lo compilas sin errores",
    "¿Recuerdas la ultima vez que funciono? Yo tampoco",
    "Si funciona, no lo toques",
    "Eso se reinicia y ya funciona",
    "Error 404",
    "Compilar... compilar... y más compilar.",
];

//Creamos una funcion para poner una frase aleatoria
function obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frasesFrikisInformatica.length);
    return frasesFrikisInformatica[indiceAleatorio];
}

//Creamos otra funcion para cambiar la frase que aparece al darle al boton
function cambiarFrase() {
    const elementoTexto = document.getElementById("texto-informatica");
    elementoTexto.textContent = obtenerFraseAleatoria();
}

//Cambiamos la frase al pulsar el boton
document.getElementById("ver-mas-boton").addEventListener("click", cambiarFrase);
