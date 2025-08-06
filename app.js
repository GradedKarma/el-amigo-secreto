let listaDeAmigos = [];

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
    
    //Limpiar la caja.
    limpiarCaja();
    actualiza(listaDeAmigos, "listaAmigos");
    return;
}

function limpiarCaja() {
        document.querySelector("#amigo").value = '';
    }

function actualiza() {
    //Obtener el elemento de la lista.
    const list = document.getElementById("listaAmigos");
    //Limpiar la lista existente.
    list.innerHTML = "";
    //Recorrer la lista.
    for (let i = 0; i < listaDeAmigos.length; i++) {
        //Creación de elemento <li>.
        const listItem = document.createElement('li');
        //Establecer el texto del elemento <li> con lista.
        listItem.textContent = listaDeAmigos[i];
        //Agregar elementos a la lista.
        list.appendChild(listItem);
    }
}

function sortearAmigo() {
    //Validación en caso de lista vacía.
    if (listaDeAmigos.length === 0) {
        alert("Por favor, ingrese nombres de amigos para sortear.");
        return;
    }

    //Validación en caso de lista con amigos insuficientes.
    if (listaDeAmigos.length === 1) {
        alert("Por favor, ingrese al menos 2 nombres de amigos para sortear.");
        return;
    }
    
    //Limpiar la lista existente de HTML.
    const listaAnterior = document.getElementById("listaAmigos");
    listaAnterior.innerHTML = "";

    //Seleccionar nombre aleatorio en la lista.
    const indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];
    
    //Obtener el elemento de la lista.
    const list = document.getElementById("resultado");

     //Creación de elemento <li>.
    const listItem = document.createElement('li');

    //Establecer el texto del elemento <li> con amigo secreto.
    listItem.textContent = amigoSecreto;

    //Agregar elementos a la lista.
    list.appendChild(listItem);

    //Recrear lista principal <listaDeAmigos>.
    listaDeAmigos = [];
}