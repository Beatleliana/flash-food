// modal sing up

// Obtenemos el elemento modal
var modal = document.getElementById('miModal');

// Get the button that opens the modal
var boton = document.getElementById("button");

// Obtenemos el elemento <span> que cierra el modal
var botonCerrar = document.getElementById("cerrar");

// programamos el evento para que cuando se haga click, se abra el modal 
boton.onclick = function() {
    modal.style.display = "block";
}

// evento para cuando cerramos el modal
botonCerrar.onclick = function() {
    modal.style.display = "none";
}

//evento por si se hacen click fuera del modal se cierre
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// modal sing in

// Obtenemos el elemento modal
var modal1 = document.getElementById('miModal1');

// Get the button that opens the modal
var boton1 = document.getElementById("button1");

// Obtenemos el elemento <span> que cierra el modal
var botonCerrar1 = document.getElementById("cerrar1");

// programamos el evento para que cuando se haga click, se abra el modal 
boton1.onclick = function() {
    modal1.style.display = "block";
}

// evento para cuando cerramos el modal
botonCerrar1.onclick = function() {
    modal1.style.display = "none";
}

//evento por si se hacen click fuera del modal se cierre
window.onclick = function(event) {
    if (event.target == modal1) {
        modal.style.display = "none";
    }
}




//link modal sing up a sing in

var link = document.getElementById('link')

link.onclick = function() {
    modal1.style.display = "block";
}

//evento por si se hacen click fuera del modal se cierre
window.onclick = function(event) {
    if (event.target == modal1) {
        modal.style.display = "none";
    }
}


//link modal sing up a sing in

var link1 = document.getElementById('link')

link1.onclick = function() {
    modal.style.display = "block";
}

//evento por si se hacen click fuera del modal se cierre
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}