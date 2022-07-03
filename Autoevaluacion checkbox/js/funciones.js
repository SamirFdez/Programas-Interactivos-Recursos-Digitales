function imprimir(){
	
	if ($("#nombre").val() =="") {
		alert("Debes llenar tu nombre primero"); 
	}else {
		$("#btn-imprimir").hide();
	window.print();
	$("#btn-imprimir").show();
	}
}

let preguntas = [
'1-	Identifico los elementos históricos más importantes del baloncesto en el plano internacional, nacional y local.', 


'2-	HAplico los fundamentos técnicos del baloncesto ante defensa y en situaciones motrices diversas que implican la toma de decisión.', 


'3-	Identifico las posiciones de cada jugador en la cancha.',


'4- Identifico semejanzas y diferencias entre los diferentes tipos de pases, dribles y tiros.', 


'5-	Aplico las reglas básicas del baloncesto en situaciones de juego.', 


'6-	HReconozco la importancia que tienen los elementos técnicos tácticos para la práctica del baloncesto.'


];

function  presentarPantalla(){

        counter = 1; 
        $(preguntas).each(function(index, texto ){
                      
  $("#cuerpo").append("<p style='text-align:justify;' >"+texto+"</p>");   
  $("#cuerpo").append("<div class='row ml-3 mb-2'>  <div class='col'><input class='form-check-input' type='radio' name='p"+counter+"'><img src='img/bien.png'></div><div class='col'><input class='form-check-input' type='radio' name='p"+counter+"'><img src='img/medio.png'></div> <div class='col'><input class='form-check-input' type='radio' name='p"+counter+"'><img src='img/mal.png'></div></div>"); 
   $("#cuerpo").append("<hr>");

    counter++; 
    });
}

 