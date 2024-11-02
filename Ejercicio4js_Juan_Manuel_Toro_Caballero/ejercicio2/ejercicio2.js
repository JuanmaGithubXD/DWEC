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

//Creamos el array con los colores
var colores = [
    "#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff", "#ff8000", "#8000ff",
    "#00ff80", "#ff0080", "#80ff00", "#0080ff", "#ffbf00", "#bf00ff", "#00ffbf",
    "#bf00ff", "#00bfff", "#ff00bf", "#80ff80", "#ff80ff", "#80ffff"
];

//Creamos una funcion para poner una frase aleatoria
function obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frasesFrikisInformatica.length);
    return frasesFrikisInformatica[indiceAleatorio];
}

//Creamos una funcion para poner los colores aleatorios
function obtenerColorAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    return colores[indiceAleatorio];
}

//Creamos otra funcion para cambiar la frase y el color que aparecen al darle al boton
function cambiarFraseYColor() {
    const elementoTexto = document.getElementById("texto-informatica");
    const boton = document.getElementById("ver-mas-boton");

    //Cambiamos el texto con una frase aleatoria
    elementoTexto.textContent = obtenerFraseAleatoria();

    //Cambiamos el color del boton y del texto con el color que se ha salido
    const colorAleatorio = obtenerColorAleatorio();
    elementoTexto.style.color = colorAleatorio;
    boton.style.backgroundColor = colorAleatorio;
}

//Cambiamos la frase y el color al pulsar el boton
document.getElementById("ver-mas-boton").addEventListener("click", cambiarFraseYColor);