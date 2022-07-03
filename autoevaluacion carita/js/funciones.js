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
'1-	Reconozco la síntesis plasmada en obras de los principales representantes del cubismo, el puntillismo y el simbolismo, atendiendo a las formas, a los materiales, al color y las ideas que los sustentan.', 


'2-	Represento personajes creíbles, mostrando características corporales y habilidades de movimientos, vocales, psicológicas y emocionales al participar en situaciones dramáticas y obras teatrales grupales.', 


'3-	Realizo representaciones escénicas, evidenciando elementos de la estructura dramática.',


'4- Interpreto himnos y cantos escolares mostrando postura, respiración, emisión y actitud adecuadas.', 


'5-	Realizo ilustraciones sencillas para afiches, portadas de libros, con temas diversos.', 


'6-	Utilizo formas y figuras de manera estilizada al dibujar y diseñar.',


'7-	Experimento la síntesis de las formas, las ideas y el color al realizar obras bidimensionales utilizando técnicas y estilos propios del puntillismo, cubismo o simbolismo.',


'8- Valoro las creaciones artísticas propias y las de otras personas en distintos contextos y según unos criterios dados, tanto técnicos como individuales.'

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

 