function imprimir(){
    window.print();
}

function validarRespuestas(){

    text1 = document.getElementById("text1").value;
    if(text1 == "2"){
        $("#text1").removeClass("normal");
        $("#text1").removeClass("mala");
        $("#text1").addClass("buena");
    } else {
        $("#text1").removeClass("normal");
        $("#text1").addClass("mala");
    }
}

function validarRespuestas2(){

    text2 = document.getElementById("text2").value;
    if(text2 == "1"){
        $("#text2").removeClass("normal");
        $("#text2").removeClass("mala");
        $("#text2").addClass("buena");
    } else {
        $("#text2").removeClass("normal");
        $("#text2").addClass("mala");
    }
}

function validarRespuestas3(){

    text3 = document.getElementById("text3").value;
    if(text3 == "1"){
        $("#text3").removeClass("normal");
        $("#text3").removeClass("mala");
        $("#text3").addClass("buena");
    } else {
        $("#text3").removeClass("normal");
        $("#text3").addClass("mala");
    }
}

function validarRespuestas4(){

    text4 = document.getElementById("text4").value;
    if(text4 == "3"){
        $("#text4").removeClass("normal");
        $("#text4").removeClass("mala");
        $("#text4").addClass("buena");
    } else {
        $("#text4").removeClass("normal");
        $("#text4").addClass("mala");
    }
}

function validarRespuestas5(){

    text5 = document.getElementById("text5").value;
    if(text5 == "2"){
        $("#text5").removeClass("normal");
        $("#text5").removeClass("mala");
        $("#text5").addClass("buena");
    } else {
        $("#text5").removeClass("normal");
        $("#text5").addClass("mala");
    }
}
