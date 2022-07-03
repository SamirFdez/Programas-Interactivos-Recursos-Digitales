function imprimir(){
    window.print();
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const droppableElementData = ev.target.getAttribute("data-draggable-id");
    const dropid = ev.target.id; 
   
    var element = document.getElementById(data);
    element.classList.add("check");
    if (droppableElementData == data) {
            $("#sndbien")[0].play();
  
    ev.target.appendChild(document.getElementById(data));
    localStorage.setItem(data, "Correcto" );
    }else{
            $("#sndmal")[0].play();
      localStorage.setItem("", "Incorrecto" );
    }
  }

  function validar(){

    resultado = 0;
  
    if (localStorage.getItem("drag1") == "Correcto") {
      resultado = resultado+1;
    }
  
      if (localStorage.getItem("drag2") == "Correcto") {
      resultado = resultado+1;
    }
  
      if (localStorage.getItem("drag3") == "Correcto") {
      resultado = resultado+1;
    }
  
      if (localStorage.getItem("drag4") == "Correcto") {
      resultado = resultado+1;
    }
  
      if (localStorage.getItem("drag5") == "Correcto") {
      resultado = resultado+1;
    }
  
      if (localStorage.getItem("drag6") == "Correcto") {
      resultado = resultado+1;
    }
  
    console.log(resultado);
  
        if (resultado == 5) {
          swal({
            title: "¡¡¡ EXCELENTE !!!",
            text: "Lograste armar las capas de la tierra.",
            icon: "success",
            button: "OK",
          });
          limpiar();
        }
        else {
          swal({
            title: "¡Oh no!",
            text: "Por favor completa esta actividad.",
            icon: "warning",
            button: "OK",
          });
        }
  
  }

  function limpiar(){

    localStorage.clear();
  }
