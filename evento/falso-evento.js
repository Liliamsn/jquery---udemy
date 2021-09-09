/*Acionamento de um evento falso.
Geralmente utilizado em situações onde outras opções precisam ser selecionadas.
Exemplo: Selecionar tudo*/ 

$(function() {
    $("#btn1").on("click", function(){
        $("#btn2").trigger("click");
    });

    $("#btn2").on("click", function() {
        alert("Clicou no botão 2");
    })
})