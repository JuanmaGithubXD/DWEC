//Seleccionamos los elementos para luego añadirlos a la lista
const input = document.getElementById("newTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Función para agregar una tarea
function addTask() {
    const taskText = input.value.trim();

    if (taskText !== "") { 
        //Añadimos un objeto en la lista
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        //Creamos el boton para eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn");

        //Creamos el evento para que al hacer click se elimine el objeto de la lista
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        //Creamos el botón de eliminar al elemento de lista
        taskItem.appendChild(deleteBtn);

        //Creamos el elemento de lista a la lista de tareas
        taskList.appendChild(taskItem);

        //Limpiamos el input para poder añadir el siguiente objeto
        input.value = "";
    }
}

//Creamos un evento al boton de agregar tarea para que llame a la funcion addTask al hacer clic
addTaskBtn.addEventListener("click", addTask);
