function imprimir(){
    window.print();
}

function validarRespuestas() {
    if(document.getElementById("select").checked) {
        alert("¡Buen trabajo! todas las respuestas son correctas");
    }
    else {
        alert("¡Sigue intentando! una o más respuestas son incorrectas");
    }
}
