//Seleccionamos los elementos para luego añadirlos a la lista
const inputName = document.getElementById("inputName");
const addBtn = document.getElementById("addBtn");
const randomBtn = document.getElementById("randomBtn");
const nameList = document.getElementById("nameList");
const selectedName = document.getElementById("selectedName");

//Array para guardar los nombres
let names = [];

//Funcion para añadir un nombre a la lista
function addName() {
    const name = inputName.value.trim();
    if (name !== "") {
        names.push(name);
        inputName.value = "";
        renderList();
    }
}

//Funcion para mostrar la lista de nombres
function renderList() {
    nameList.innerHTML = "";
    names.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });
}

//Funcion para poner un nombre aleatorio
function selectRandomName() {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const randomName = names[randomIndex];
        selectedName.textContent = `Se ha elegido: ${randomName}`;
        selectedName.classList.add("selected");
    } else {
        selectedName.textContent = "No hay nombres en la lista";
        selectedName.classList.add("selected");
    }
}

//Añadimos los eventos al darle click para añadir un nombre o escoger uno aleatorio
addBtn.addEventListener("click", addName);
randomBtn.addEventListener("click", selectRandomName);
