
//Evento botão
/*
$(function() {
    $("button").click(function() {
        
        //Evento de adicionar e retirar uma classe
        /*
        if($(this).hasClass("estilo-botao")){
            $(this).removeClass("estilo-botao");
        }else{
            $(this).addClass("estilo-botao");
            //Evento de retirar e adicionar uma classe com o clique através do toggle
            $(this).toggleClass("estilo-botao");
        });
    });
}


//Evento que aciona o mouseover(dentro) e mouseout(fora)

$("button").hover(function(){
    $(this).addClass("estilo-botao");
},function(){
    $(this).removeClass("estilo-botao");
});

$("button").hover(function() {
    $(this).toggleClass("estilo-botao");
});
*/ 


$(function() {
    $("#botao1").on("click", function() {
        alert("Clicou");
    });
    $("#botao1").off("click");
});


