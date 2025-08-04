const listaDeAmigos = [];

function agregarAmigo() {
    const inputName = document.getElementById("amigo");
    const nuevoAmigo = inputName.value.trim();
    
    //Validación en caso de campo vacío.
    if (nuevoAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }
    //No nombres repetidos.
    if (listaDeAmigos.includes(nuevoAmigo)) {
        alert("El nombre ya está en la lista.");
        return;
    } 

listaDeAmigos.push(nuevoAmigo);
console.log(listaDeAmigos);

//Limpiar la caja.
inputName.value = '';

}






