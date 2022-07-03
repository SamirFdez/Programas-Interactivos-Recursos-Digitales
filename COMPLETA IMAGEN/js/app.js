function imprimir(){
    window.print();
}

function validarRespuestas(){

    text1 = document.getElementById("text1").value;
    if(text1 == "Cráter" || text1 == "cráter"){
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
    if(text2 == "Ceniza" || text2 == "ceniza"){
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
    if(text3 == "Chimenea" || text3 == "chimenea"){
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
    if(text4 == "Lava" || text4 == "lava"){
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
    if(text5 == "Cono volcánico" || text5 == "cono volcánico"){
        $("#text5").removeClass("normal");
        $("#text5").removeClass("mala");
        $("#text5").addClass("buena");
    } else {
        $("#text5").removeClass("normal");
        $("#text5").addClass("mala");
    }
}

function validarRespuestas6(){

    text6 = document.getElementById("text6").value;
    if(text6 == "Magma" || text6 == "magma"){
        $("#text6").removeClass("normal");
        $("#text6").removeClass("mala");
        $("#text6").addClass("buena");
    } else {
        $("#text6").removeClass("normal");
        $("#text6").addClass("mala");
    }
}