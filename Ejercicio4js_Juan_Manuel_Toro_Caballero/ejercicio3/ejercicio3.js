//Seleccionamos los elementos para luego añadirlos a la lista
const addItemBtn = document.getElementById('addItemBtn');
const newItemInput = document.getElementById('newItemInput');
const itemsList = document.getElementById('itemsList');

function addItem() {
    const inputValue = newItemInput.value.trim();

    //Comprobamos si el input esta vacio
    if (inputValue !== '') {
        //Crear un nuevo elemento en la lista
        const li = document.createElement('li');
        li.textContent = inputValue;

        //Creamos el boton para marcar como completado
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<span class="material-icons">check_circle</span>';
        completeBtn.classList.add('completeBtn');

        //Creamos el evento para mostrar que se ha completado
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        //Creamos el boton para eliminar el objeto
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<span class="material-icons">delete</span>';
        deleteBtn.classList.add('deleteBtn');

        //Creamos el evento para eliminar el objeto
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        //Metemos los botones al objeto que esta en la lista
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        itemsList.appendChild(li);

        //Limpiamos el input para poder añadir el siguiente objeto en la lista
        newItemInput.value = '';
    }
}

// Asignar la función addItem al evento click del botón
addItemBtn.addEventListener('click', addItem);
