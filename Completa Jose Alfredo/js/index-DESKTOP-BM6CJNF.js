
function imprimir() {
	window.print();
}

function BarajarRespuestas(){
	var ul = document.querySelector('#options');
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[Math.random() * i | 0]);
	}
}

var Respuestas = [
	{
		Input: "1",
		Value: "Biotopo"

	}, {
		Input: "2", 
		Value: "Ecosistema"

	}, {
		Input: "3",
		Value: "Nicho ecológico"

	}, {
		Input: "4",
		Value: "Ecología"

	}, {
		Input: "5",
		Value: "Biomasa, mineralomasa y productividad primaria"

	}, {
		Input: "6",
		Value: "Hábitat"

	}, {
		Input: "7",
		Value: "Sucesión ecológica"

	}
]

const ValidarRespuestas = () => {

	var form = $('#form');
	var inputArray = form.serializeArray()
	$.each(inputArray, (index, row) => {

		const Name = row.name;
		const Value = row.value

		if (Value.trim() === "") {
			form.find("[name='" + Name + "']").removeClass("is-valid").addClass("is-invalid")
			return;
		}

		const RespuestaReal = Respuestas.find((v, i) => {
			if (v.Input.trim() === Name) {
				return v;
			}
		})

		if (Value.trim().toLowerCase() === RespuestaReal.Value.trim().toLowerCase()) {

			form.find("[name='" + Name + "']").removeClass("is-invalid").addClass("is-valid")
			return;
		} else {
			form.find("[name='" + Name + "']").removeClass("is-valid").addClass("is-invalid")
			return;
		}

	})

}

$(document).ready(function () {

	$(".inputInLabel").droppable({
		drop: function (event, ui) {

			$(this).val("")
			$(this).removeClass("is-valid");
			$(this).removeClass("is-invalid");

			const InputName = $(this).attr('name');
			const GetResp = Respuestas.find((e) => e.Input === InputName);
			/*Estoy validando con el texto, Si quiere validar con el Id de cada li cambie por val */
			const OptionValue = $(ui.draggable).text();
		
			
			if (typeof GetResp !== "undefined") {
				if (GetResp.Value === OptionValue) {
					$(this).addClass("is-valid");
					$(this).val(OptionValue);
					$(this).prop("disabled",true);
					//Oculto el Elemento ya Seleccionado
					$(ui.draggable).hide();
				} else {
					$(this).addClass("is-invalid");
					//Devuelvo el Elemento a su posición Original
					$(ui.draggable).originalPosition = {
						top : 0,
						left : 0
					};
				}

			}
		}
	});


	$('.inputInLabel').keyup((event)=>{
		console.log("No Puede escribir solo completar...")
		event.preventDefault();
		$(event.target).val("");
		
	})

	$("#print").click(() => {
		ValidarRespuestas();
		imprimir();
	})

	$('ul li').draggable({
		helper: 'clone'
	});


	$("#reset").click(() => {
		var form = $('#form');
		var inputArray = form.serializeArray()
		$(".inputInLabel").removeClass("is-invalid").removeClass("is-valid");
			$(".inputInLabel").prop("disabled",false);
			$(".inputInLabel").val("");
			BarajarRespuestas();
			$('#options li').show();
		
	})

	$("#form").submit((event) => {
		event.preventDefault();
		ValidarRespuestas();
	})

});



