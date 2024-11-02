//Funcion para mostrar o ocultar la caja
function toggleBox() {
    const box = document.getElementById("box");
    const button = document.getElementById("toggleBtn");
  
    //Comprobamos si la caja es visible o no
    if (box.style.display === "none") {
      box.style.display = "block";
      button.textContent = "Ocultar Caja";
    } else {
      box.style.display = "none";
      button.textContent = "Mostrar Caja";
    }
  }
  
  //Asociamos la funcion toggleBox al evento de darle click al boton
  document.getElementById("toggleBtn").addEventListener("click", toggleBox);
  